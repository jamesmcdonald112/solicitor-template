import { ActionError } from "astro:actions";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { ContactInput } from "../schema/contact.schema";

// Mock deliverContact before importing the action
const mockDeliverContact = vi.fn();
vi.mock("../service/deliverContact", () => ({
	deliverContact: mockDeliverContact,
}));

const { contact } = await import("../actions/contact");

// Cast to any to call .handler directly — Astro's defineAction type doesn't
// expose .handler externally, but our mock and the runtime object both have it.
// biome-ignore lint/suspicious/noExplicitAny: test-only cast
const handler = (contact as any).handler as (
	input: ContactInput,
) => Promise<{ ok: boolean }>;

const validInput: ContactInput = {
	name: "Jane Doe",
	email: "jane@example.com",
	phone: "+353871234567" as ContactInput["phone"],
	service: "Wills and Estate Administration",
	message: "I need help with a will.",
	website: "",
};

describe("contact action handler", () => {
	beforeEach(() => {
		mockDeliverContact.mockReset();
		mockDeliverContact.mockResolvedValue(undefined);
	});

	it("returns { ok: true } on a successful submission", async () => {
		const result = await handler(validInput);
		expect(result).toEqual({ ok: true });
	});

	it("calls deliverContact with the validated input", async () => {
		await handler(validInput);
		expect(mockDeliverContact).toHaveBeenCalledOnce();
		expect(mockDeliverContact).toHaveBeenCalledWith(validInput);
	});

	it("silently succeeds and skips deliverContact when honeypot is filled", async () => {
		const result = await handler({
			...validInput,
			website: "http://spam.example.com",
		});
		expect(result).toEqual({ ok: true });
		expect(mockDeliverContact).not.toHaveBeenCalled();
	});

	it("throws ActionError with INTERNAL_SERVER_ERROR when deliverContact fails", async () => {
		mockDeliverContact.mockRejectedValue(new Error("SMTP timeout"));

		await expect(handler(validInput)).rejects.toThrow(ActionError);
		await expect(handler(validInput)).rejects.toMatchObject({
			code: "INTERNAL_SERVER_ERROR",
			message: "Unable to send message. Please try again later.",
		});
	});
});
