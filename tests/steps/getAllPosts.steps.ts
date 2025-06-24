import { When, Then } from "@cucumber/cucumber";
import { request } from "@playwright/test";
import { expectIsArray, expectArrayLength } from "../../utils/assertions";
import { setSharedResponse } from "./common.steps";

let response: any;
let responseBody: any[];

When("I send a GET request to {string}", async function (path: string) {
  const apiContext = await request.newContext({
    baseURL: process.env.API_BASE_URL,
  });

  response = await apiContext.get(path);
  responseBody = await response.json();
  setSharedResponse(response);
});

Then("the response body should be an array", function () {
  expectIsArray(responseBody);
});

Then("the response body should contain {int} items", function (count: number) {
  expectArrayLength(responseBody, count);
});
