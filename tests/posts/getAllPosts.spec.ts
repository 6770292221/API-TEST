import { test } from "@playwright/test";
import { getAllPosts } from "../../utils/apiHelper";
import {
  expectStatus,
  expectIsArray,
  expectArrayLength,
  expectObjectHasKeys,
  expectArrayUniqueValues,
} from "../../utils/assertions";

test.describe("GET /posts - Get All Posts", () => {
  test("TC01: should return 200 OK", async ({ request }) => {
    const res = await getAllPosts(request);
    await expectStatus(res, 200);
  });

  test("TC02: should return array of posts", async ({ request }) => {
    const res = await getAllPosts(request);
    const body = await res.json();
    expectIsArray(body);
  });

  test("TC03: should return exactly 100 posts", async ({ request }) => {
    const res = await getAllPosts(request);
    const body = await res.json();
    expectArrayLength(body, 100);
  });

  test("TC04: each post should have required fields", async ({ request }) => {
    const res = await getAllPosts(request);
    const body = await res.json();

    for (const post of body) {
      expectObjectHasKeys(post, ["userId", "id", "title", "body"]);
    }
  });

  test("TC05: post IDs should be unique", async ({ request }) => {
    const res = await getAllPosts(request);
    const body = await res.json();
    const ids = body.map((p) => p.id);
    expectArrayUniqueValues(ids);
  });
});
