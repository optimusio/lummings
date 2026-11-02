import { createServerFn } from "@tanstack/react-start";

/**
 * Browser-callable entry point for the voice fallback. The handler runs on the server only. The
 * ElevenLabs call, the API key, the allowed lines and the rate limits all live in eleven-tts.server.ts.
 */
export const speakWithVoice = createServerFn({ method: "POST" })
  .validator((input: unknown) => {
    const data = input as { voiceId?: unknown; text?: unknown };
    if (typeof data?.voiceId !== "string" || typeof data?.text !== "string") throw new Error("Unknown line");
    return { voiceId: data.voiceId, text: data.text };
  })
  .handler(async ({ data }) => {
    const { getRequestHeader } = await import("@tanstack/react-start/server");
    const forwarded = getRequestHeader("x-forwarded-for") ?? "";
    const client = forwarded.split(",")[0]?.trim() || getRequestHeader("x-real-ip") || "unknown";
    const { synthesize } = await import("./eleven-tts.server");
    return synthesize(data.voiceId, data.text, { client });
  });
