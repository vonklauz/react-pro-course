import type z from "zod";
import type { schema } from "../lib/validation";

export type RhfFormData = z.infer<typeof schema>;
