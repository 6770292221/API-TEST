import { test, expect } from "@playwright/test";

test.describe("PUT /posts/:id - Update Post", () => {
  test("TC01: should update post successfully", async ({ request }) => {
    const res = await request.put("/posts/1", {
      data: {
        id: 1,
        title: "Updated Title",
        body: "Updated Body",
        userId: 1,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.title).toBe("Updated Title");
    expect(body.body).toBe("Updated Body");
    expect(body.id).toBe(1);
  });
});
