import { test, expect } from "@playwright/test";

test.describe("GET /posts - Get All Posts", () => {
  test("TC01: should return 200 OK", async ({ request }) => {
    const res = await request.get("/posts");
    expect(res.status()).toBe(200);
  });

  test("TC02: should return array of posts", async ({ request }) => {
    const res = await request.get("/posts");
    const body = await res.json();
    expect(Array.isArray(body)).toBeTruthy();
  });

  test("TC03: should return exactly 100 posts", async ({ request }) => {
    const res = await request.get("/posts");
    const body = await res.json();
    expect(body.length).toBe(100);

    test("TC04: each post should have required fields", async ({ request }) => {
      const res = await request.get("/posts");
      const body = await res.json();

      for (const post of body) {
        expect(post).toHaveProperty("userId");
        expect(post).toHaveProperty("id");
        expect(post).toHaveProperty("title");
        expect(post).toHaveProperty("body");
      }
    });

    test("TC05: post IDs should be unique", async ({ request }) => {
      const res = await request.get("/posts");
      const body = await res.json();

      const ids = body.map((p) => p.id);
      const unique = new Set(ids);
      expect(unique.size).toBe(ids.length);
    });
  });
});
