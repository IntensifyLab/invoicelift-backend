import type { FastifyPluginAsync } from "fastify";

export const v1Routes: FastifyPluginAsync = async (app) => {
  app.get("/meta", async () => ({
    name: "invoicelift-api",
    version: "0.1.0",
    description: "REST facade for Soroban contracts and indexers (scaffold).",
  }));

  // TODO: routes for contract invocation prep, webhook ingestion, admin ops
};

// Contribution check by robert-j at 2024-11-18T13:22:45

// Contribution check by james-t at 2025-02-22T18:53:47

// Contribution check by sambuilder at 2025-05-30T00:24:49

// Contribution check by robert-j at 2025-09-03T05:55:51

// Contribution check by james-t at 2025-12-08T11:26:53

// Contribution check by sambuilder at 2026-03-14T16:57:55

// patch: 2026-05-31T16:43:47.027033

// patch: 2026-06-07T23:51:53.513525

// patch: 2026-06-13T11:12:58.378394

// patch: 2026-06-20T03:45:24.324345

// patch: 2026-06-22T14:08:06.486509

// patch: 2026-06-23T19:19:27.567591

// patch: 2026-06-25T00:30:48.648673

// patch: 2026-07-04T03:25:56.756788
