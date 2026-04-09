import { beforeEach, describe, expect, it, vi } from "vitest";
import type { ContactInput } from "../schema/contact.schema";

// Mock resend before importing the module under test
const mockSend = vi.fn();
vi.mock("resend", () => {
	const Resend = vi.fn(function (this: { emails: { send: typeof mockSend } }) {
		this.emails = { send: mockSend };
	});
	return { Resend };
});

// Import after mocks are set up
const { deliverContact } = await import("../service/deliverContact");

const validInput: ContactInput = {
	name: "John Smith",
	email: "john@example.com",
	phone: "+353871234567" as ContactInput["phone"],
	service: "Employment Law",
	message: "I need help.",
	website: "",
};

describe("deliverContact", () => {
	beforeEach(() => {
		mockSend.mockReset();
		mockSend.mockResolvedValue({ data: { id: "email-id-123" }, error: null });
	});

	it("calls resend.emails.send with the correct fields", async () => {
		await deliverContact(validInput);

		expect(mockSend).toHaveBeenCalledOnce();
		const [call] = mockSend.mock.calls;
		expect(call[0]).toMatchObject({
			subject: "New contact form submission — Employment Law",
		});
		expect(call[0].html).toContain("Name:");
		expect(call[0].html).toContain("John Smith");
		expect(call[0].html).toContain("john@example.com");
		expect(call[0].html).toContain("+353871234567");
		expect(call[0].html).toContain("Employment Law");
		expect(call[0].html).toContain("I need help.");
	});

	it("includes the service in the subject line", async () => {
		await deliverContact({
			...validInput,
			service: "Family & Childcare Law" as const,
		});

		const [call] = mockSend.mock.calls;
		expect(call[0].subject).toBe(
			"New contact form submission — Family & Childcare Law",
		);
	});

	it("shows (none) in the body when message is empty", async () => {
		await deliverContact({ ...validInput, message: "" });

		const [call] = mockSend.mock.calls;
		expect(call[0].html).toContain("(none)");
	});

	it("propagates errors thrown by resend", async () => {
		mockSend.mockRejectedValue(new Error("Network error"));

		await expect(deliverContact(validInput)).rejects.toThrow("Network error");
	});
});
