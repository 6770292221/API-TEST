import { test } from "@playwright/test";
import { updatePost } from "../../utils/apiHelper";
import { expectStatus, expectValue } from "../../utils/assertions";

test.describe("PUT /posts/:id - Update Post", () => {
  test("TC01: should update post successfully", async ({ request }) => {
    const res = await updatePost(request, 1, {
      id: 1,
      title: "Updated Title",
      body: "Updated Body",
      userId: 1,
    });

    await expectStatus(res, 200);

    const body = await res.json();
    expectValue(body.title, "Updated Title");
    expectValue(body.body, "Updated Body");
    expectValue(body.id, 1);
  });
});
