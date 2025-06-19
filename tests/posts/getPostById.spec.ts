import { test } from "@playwright/test";
import { getPostById } from "../../utils/apiHelper";
import {
  expectStatus,
  expectValue,
  expectType,
  expectStrictEqual,
} from "../../utils/assertions";

test.describe("GET /posts/:id - More Cases", () => {
  test("TC01: should return correct post data for ID 5", async ({
    request,
  }) => {
    const res = await getPostById(request, 5);
    await expectStatus(res, 200);

    const body = await res.json();
    expectValue(body.id, 5);
    expectType(body.title, "string");
  });

  test("TC02: should return empty object for non-existent ID", async ({
    request,
  }) => {
    const res = await getPostById(request, 99999);
    await expectStatus(res, 404);

    const body = await res.json();
    expectStrictEqual(body, {});
  });

  test("TC03: should return error for negative ID", async ({ request }) => {
    const res = await getPostById(request, -1);
    await expectStatus(res, 404);

    const body = await res.json();
    expectStrictEqual(body, {});
  });

  test("TC04: should have correct data type", async ({ request }) => {
    const res = await getPostById(request, 3);
    await expectStatus(res, 200);

    const body = await res.json();
    expectType(body.id, "number");
    expectType(body.userId, "number");
    expectType(body.title, "string");
    expectType(body.body, "string");
  });
});
