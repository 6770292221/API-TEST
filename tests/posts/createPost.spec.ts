import { test, expect } from "@playwright/test";

test.describe("POST /posts - Create Post API", () => {
  test("TC01: should create a post with valid data", async ({ request }) => {
    const res = await request.post("/posts", {
      data: {
        title: "My First Post",
        body: "Hello world from Playwright!",
        userId: 1,
      },
      headers: { "Content-Type": "application/json" },
    });

    expect(res.status()).toBe(201);
    const body = await res.json();
    expect(body).toHaveProperty("id");
    expect(body.title).toBe("My First Post");
  });

  test("TC03: should fail when userId is not a number", async ({ request }) => {
    const res = await request.post("/posts", {
      data: {
        title: "Invalid UserId",
        body: "This should fail",
        userId: "abc",
      },
      headers: { "Content-Type": "application/json" },
    });

    expect(400).toContain(res.status());
  });

  test("TC04: should fail when sending empty body", async ({ request }) => {
    const res = await request.post("/posts", {
      headers: { "Content-Type": "application/json" },
    });

    expect(400).toContain(res.status());
  });
});
