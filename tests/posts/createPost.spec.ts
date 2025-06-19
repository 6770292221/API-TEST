import { test } from "@playwright/test";
import { createPost } from "../../utils/apiHelper";
import {
  expectStatus,
  expectHasProperty,
  expectValue,
} from "../../utils/assertions";

test.describe("POST /posts - Create Post API", () => {
  test("TC01: should create a post with valid data", async ({ request }) => {
    const res = await createPost(request, {
      title: "My First Post",
      body: "Hello world from Playwright!",
      userId: 1,
    });

    await expectStatus(res, 201);
    const body = await res.json();
    expectHasProperty(body, "id");
    expectValue(body.title, "My First Post");
  });

  test("TC03: should fail when userId is not a number", async ({ request }) => {
    const res = await createPost(request, {
      title: "Invalid UserId",
      body: "This should fail",
      userId: "abc",
    });

    await expectStatus(res, 400);
  });

  test("TC04: should fail when sending empty body", async ({ request }) => {
    const res = await request.post("/posts", {
      headers: { "Content-Type": "application/json" },
    });

    await expectStatus(res, 400);
  });
});
