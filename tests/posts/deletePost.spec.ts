import { test, expect } from "@playwright/test";

test.describe("DELETE /posts/:id - Delete Post", () => {
  test("TC01: should delete post successfully", async ({ request }) => {
    const res = await request.delete("/posts/1");

    expect(res.status()).toBe(200);

    const text = await res.text();
    expect(200).toBe(res.status());
  });
});
