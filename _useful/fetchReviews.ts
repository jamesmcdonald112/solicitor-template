import { GOOGLE_PLACES_API_KEY } from "astro:env/server";
import { firm } from "../src/config/firm";

// The shape of a review we expose to the rest of the app
export interface Review {
	author: string;
	rating: number;
	text: string;
	date: string;
}

// Shape of a single review as returned by the Places API
interface RawReview {
	rating: number;
	text?: { text: string };
	authorAttribution?: { displayName?: string };
	publishTime?: string;
}

// What we store in the cache: the reviews plus when they were fetched
interface CacheEntry {
	reviews: Review[];
	fetchedAt: number;
}

// Module-level cache — survives across requests for the lifetime of the server process.
// Cleared on every cold start (deploy / restart).
let cache: CacheEntry | null = null;

const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

export async function fetchReviews(): Promise<Review[]> {
	// Return cached reviews if they are still within the TTL
	if (cache && Date.now() - cache.fetchedAt < CACHE_TTL_MS) {
		return cache.reviews;
	}

	// Google Places API (New) — fetch all review fields for this place
	const url = `https://places.googleapis.com/v1/places/${firm.googlePlaceId}?fields=reviews&languageCode=en`;

	let response: Response;
	try {
		response = await fetch(url, {
			headers: {
				"X-Goog-Api-Key": GOOGLE_PLACES_API_KEY,
			},
		});
	} catch (err) {
		// Network-level failure (timeout, DNS, etc.)
		console.error("[fetchReviews] Network error fetching reviews:", err);
		if (cache) return cache.reviews;
		return [];
	}

	if (!response.ok) {
		// HTTP error from the API (e.g. 401 bad key, 404 bad place ID, 429 rate limit)
		console.error(
			`[fetchReviews] API responded with ${response.status} ${response.statusText}`,
		);
		if (cache) return cache.reviews;
		return [];
	}

	const data = await response.json();
	const raw: RawReview[] = data.reviews ?? [];

	const reviews: Review[] = raw
		// Only keep reviews with 4+ stars that have written text
		.filter(
			(r): r is RawReview & { text: { text: string } } =>
				r.rating >= 4 && !!r.text?.text,
		)
		.map((r) => ({
			author: r.authorAttribution?.displayName ?? "Anonymous",
			rating: r.rating,
			text: r.text.text,
			// Format publishTime as "Month Year" for display, e.g. "March 2025"
			date: r.publishTime
				? new Date(r.publishTime).toLocaleDateString("en-IE", {
						month: "long",
						year: "numeric",
					})
				: "",
		}));

	// Store in cache with the current timestamp
	cache = { reviews, fetchedAt: Date.now() };
	return reviews;
}
