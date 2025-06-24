import { Given, When, Then } from "@cucumber/cucumber";
import { request } from "@playwright/test";
import { expectValue } from "../../utils/assertions";
import { setSharedResponse, setSharedResponseBody } from "./common.steps";

let response: any;
let responseBody: any;

Given("Create Post", async function () {});

When(
  "I send a PATCH request to {string} with body:",
  async function (path: string, body: string) {
    const apiContext = await request.newContext({
      baseURL: process.env.API_BASE_URL,
    });

    response = await apiContext.patch(path, {
      data: JSON.parse(body),
    });

    responseBody = await response.json();
    setSharedResponse(response);
    setSharedResponseBody(responseBody);
  }
);
