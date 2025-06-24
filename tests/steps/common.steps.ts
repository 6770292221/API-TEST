import { Then } from "@cucumber/cucumber";
import { expectStatus, expectValue } from "../../utils/assertions";

let response: any;
let responseBody: any;

Then(
  "the response status should be {int}",
  async function (statusCode: number) {
    await expectStatus(response, statusCode);
  }
);

Then(
  'the response body "{word}" should be {string}',
  function (field: string, expected: string) {
    expectValue(responseBody[field], expected);
  }
);

Then(
  'the response body "{word}" should be {int}',
  function (field: string, expected: number) {
    expectValue(responseBody[field], expected);
  }
);

export function setSharedResponse(res: any) {
  response = res;
}

export function setSharedResponseBody(body: any) {
  responseBody = body;
}
