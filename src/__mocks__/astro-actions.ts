export class ActionError extends Error {
	code: string;
	constructor({ code, message }: { code: string; message: string }) {
		super(message);
		this.code = code;
	}
}

export function defineAction<TInput, TOutput>({
	handler,
}: {
	accept?: string;
	input?: unknown;
	handler: (input: TInput) => Promise<TOutput>;
}) {
	return { handler };
}
