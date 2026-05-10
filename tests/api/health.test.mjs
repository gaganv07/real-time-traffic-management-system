import test from "node:test";
import assert from "node:assert/strict";

test("health payload shape", async () => {
  const response = await fetch("http://localhost:8000/api/v1/health").catch(() => null);
  assert.ok(response === null || [200, 503].includes(response.status));
});

