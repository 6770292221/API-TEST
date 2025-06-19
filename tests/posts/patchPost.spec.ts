import { test } from "@playwright/test";
import { patchPost } from "../../utils/apiHelper";
import { expectStatus, expectValue } from "../../utils/assertions";

test.describe("PATCH /posts/:id - Partially Update Post", () => {
  test("TC01: should partially update post title", async ({ request }) => {
    const res = await patchPost(request, 1, {
      title: "Partially Updated Title",
    });

    await expectStatus(res, 200);

    const body = await res.json();
    expectValue(body.title, "Partially Updated Title");
    expectValue(body.id, 1);
  });

  test("TC02: should partially update post body", async ({ request }) => {
    const res = await patchPost(request, 1, {
      body: "Only Body Changed",
    });

    await expectStatus(res, 200);

    const body = await res.json();
    expectValue(body.body, "Only Body Changed");
  });
});
