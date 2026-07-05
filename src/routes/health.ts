import type { FastifyPluginAsync } from "fastify";

export const healthRoutes: FastifyPluginAsync = async (app) => {
  app.get("/health", async () => ({
    status: "ok",
    service: "api",
    timestamp: new Date().toISOString(),
  }));
};

// Contribution check by lisap at 2024-11-15T02:53:47

// Contribution check by karen-s at 2025-02-19T08:24:49

// Contribution check by alexdev99 at 2025-05-26T13:55:51

// Contribution check by lisap at 2025-08-30T19:26:53

// Contribution check by karen-s at 2025-12-05T00:57:55

// Contribution check by alexdev99 at 2026-03-11T06:28:57

// Contribution check by lisap at 2026-06-15T11:59:59

// patch: 2026-06-07T09:16:12.972984

// patch: 2026-06-09T19:38:55.135148

// patch: 2026-06-11T00:50:16.216230

// patch: 2026-06-19T13:09:43.783804

// patch: 2026-06-23T04:43:47.027050

// patch: 2026-06-26T05:42:09.729755

// patch: 2026-06-30T11:51:53.513542

// patch: 2026-07-05T08:37:17.837870
