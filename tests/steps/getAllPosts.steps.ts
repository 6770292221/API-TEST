import { When, Then } from "@cucumber/cucumber";
import { request } from "@playwright/test";
import {
  expectStatus,
  expectIsArray,
  expectArrayLength,
  expectObjectHasKeys,
} from "../../utils/assertions";

let response: any;
let responseBody: any[];

When("I send a GET request to {string}", async function (path: string) {
  const apiContext = await request.newContext({
    baseURL: process.env.API_BASE_URL,
  });

  response = await apiContext.get(path);
  responseBody = await response.json();
});

Then("the response status should be {int}", function (statusCode: number) {
  expectStatus(response, statusCode);
});

Then("the response body should be an array", function () {
  expectIsArray(responseBody);
});

Then("the response body should contain {int} items", function (count: number) {
  expectArrayLength(responseBody, count);
});
