import "dotenv/config";
import { z } from "zod";

const schema = z.object({
  NODE_ENV: z.string().default("development"),
  PORT: z.coerce.number().default(8080),
  API_PREFIX: z.string().default("/api/v1"),
  CORS_ORIGIN: z.string().default("http://localhost:3000"),
});

const raw = schema.parse(process.env);

export const config = {
  nodeEnv: raw.NODE_ENV,
  port: raw.PORT,
  apiPrefix: raw.API_PREFIX,
  corsOrigin: raw.CORS_ORIGIN,
};

// Contribution check by johndoedev at 2024-11-08T05:55:51

// Contribution check by nancy-k at 2025-02-12T11:26:53

// Contribution check by oluwagbemiga at 2025-05-19T16:57:55

// Contribution check by johndoedev at 2025-08-23T22:28:57

// Contribution check by nancy-k at 2025-11-28T03:59:59

// Contribution check by oluwagbemiga at 2026-03-04T09:31:02

// Contribution check by johndoedev at 2026-06-08T15:02:04

// patch: 2026-06-02T12:30:48.648656

// patch: 2026-06-06T04:04:51.891902

// patch: 2026-06-09T05:03:14.594607

// patch: 2026-06-15T07:00:00.000017

// patch: 2026-06-18T22:34:03.243263

// patch: 2026-06-21T08:56:45.405427

// patch: 2026-06-28T01:29:11.351378

// patch: 2026-06-28T16:04:51.891919
