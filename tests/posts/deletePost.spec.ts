import { test } from "@playwright/test";
import { deletePost } from "../../utils/apiHelper";
import { expectStatus, expectEmptyObject } from "../../utils/assertions";

test.describe("DELETE /posts/:id - Delete Post", () => {
  test("TC01: should delete post successfully", async ({ request }) => {
    const res = await deletePost(request, 1);
    await expectStatus(res, 200);

    const body = await res.json();
    expectEmptyObject(body);
  });
});
