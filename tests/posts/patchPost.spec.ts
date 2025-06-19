import { test, expect } from "@playwright/test";

test.describe("PATCH /posts/:id - Partially Update Post", () => {
  test("TC01: should partially update post title", async ({ request }) => {
    const res = await request.patch("/posts/1", {
      data: {
        title: "Partially Updated Title",
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.title).toBe("Partially Updated Title");
    expect(body.id).toBe(1);
  });

  test("TC02: should partially update post body", async ({ request }) => {
    const res = await request.patch("/posts/1", {
      data: {
        body: "Only Body Changed",
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.body).toBe("Only Body Changed");
  });
});
