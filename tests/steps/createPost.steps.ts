import { When, Then } from "@cucumber/cucumber";
import { request } from "@playwright/test";
import { expectHasProperty, expectValue } from "../../utils/assertions";
import { setSharedResponse, setSharedResponseBody } from "./common.steps";

let response: any;
let responseBody: any;

When(
  "I send a POST request to {string} with body:",
  async function (path: string, body: string) {
    const apiContext = await request.newContext({
      baseURL: process.env.API_BASE_URL,
    });

    response = await apiContext.post(path, {
      data: JSON.parse(body),
    });

    responseBody = await response.json();

    setSharedResponse(response);
    setSharedResponseBody(responseBody);
  }
);

When(
  "I send a POST request to {string} with empty body",
  async function (path: string) {
    const apiContext = await request.newContext({
      baseURL: process.env.API_BASE_URL,
    });

    response = await apiContext.post(path, {
      headers: { "Content-Type": "application/json" },
    });

    try {
      responseBody = await response.json();
    } catch {
      responseBody = {};
    }
  }
);

Then(
  "the response body should have property {string}",
  function (field: string) {
    expectHasProperty(responseBody, field);
  }
);
