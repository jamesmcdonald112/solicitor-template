import teamSectionBackground from "../../assets/images/pages/property/team.webp";
import dukePhoto from "../../assets/team/duke.webp";
import maryPhoto from "../../assets/team/maryCropped.webp";
import nicholasPhoto from "../../assets/team/nicholas.webp";
import richardPhoto from "../../assets/team/richard.webp";

export const teamSectionContent = {
	title: "Meet our team",
	backgroundImage: teamSectionBackground,
	intro:
		"Established in 1979, our family-run solicitor practice has been serving clients across Kilkenny and surrounding areas for over 46 years. We provide clear, practical legal advice in property, probate and private client matters, with a strong focus on communication, personal service and keeping clients fully informed at every stage.",
	members: [
		{
			name: "Mary Molloy",
			role: "Principal Solicitor",
			bio: "Mary leads the firm with over four decades of experience advising clients on property and private client matters throughout Kilkenny. She is known for her practical guidance, straightforward advice and personal approach to each case.",
			photo: maryPhoto,
		},
		{
			name: "Nicholas O'Shea",
			role: "Solicitor",
			bio: "Nicholas works across property and private client matters, supporting clients with clear communication and efficient case progression. He focuses on responsiveness, clarity and maintaining consistent contact throughout the legal process.",
			photo: nicholasPhoto,
		},
		{
			name: "Richard O'Shea",
			role: "Solicitor",
			bio: "Richard advises clients on buying and selling property, conveyancing and probate matters. He brings a steady, detail-focused approach to ensure each transaction progresses efficiently from first instruction to final completion.",
			photo: richardPhoto,
		},
		{
			name: "Duke",
			role: "Office Companion",
			bio: "Providing daily morale support to the team and a friendly welcome to visitors.",
			photo: dukePhoto,
		},
	],
} as const;

export type TeamSectionContent = typeof teamSectionContent;
