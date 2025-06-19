import { test, expect } from "@playwright/test";

test.describe("GET /posts/:id - More Cases", () => {
  test("TC01: should return correct post data for ID 5", async ({
    request,
  }) => {
    const res = await request.get("/posts/5");
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.id).toBe(5);
    expect(typeof body.title).toBe("string");
  });

  test("TC02: should return empty object for non-existent ID", async ({
    request,
  }) => {
    const res = await request.get("/posts/99999");
    expect(res.status()).toBe(404);

    const body = await res.json();
    expect(body).toEqual({});
  });

  test("TC03: should return error for negative ID", async ({ request }) => {
    const res = await request.get("/posts/-1");
    expect(res.status()).toBe(404);

    const body = await res.json();
    expect(body).toEqual({});
  });

  test("TC04: should have correct data type", async ({ request }) => {
    const res = await request.get("/posts/3");
    expect(res.status()).toBe(200);
    const body = await res.json();

    expect(typeof body.id).toBe("number");
    expect(typeof body.userId).toBe("number");
    expect(typeof body.title).toBe("string");
    expect(typeof body.body).toBe("string");
  });
});
