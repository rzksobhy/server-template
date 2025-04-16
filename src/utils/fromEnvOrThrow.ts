import "dotenv/config";
import { z } from "zod";

const envkeysParseFunctions = {
    HOST: z.string(),
    PORT: z.string().transform((value) => JSON.parse(value) as number),
} satisfies Record<string, z.ZodType>;

function fromEnvOrThrow<const T extends keyof typeof envkeysParseFunctions>(
    key: T,
): z.infer<(typeof envkeysParseFunctions)[T]> {
    const value = process.env[key];
    if (value === undefined) {
        throw Error(`failed to find env '${key}'`);
    }

    return envkeysParseFunctions[key].parse(value);
}

export default fromEnvOrThrow;
