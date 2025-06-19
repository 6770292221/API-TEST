import { APIResponse, expect } from "@playwright/test";

export async function expectStatus(res: APIResponse, expected: number) {
  expect(res.status()).toBe(expected);
}

export function expectHasProperty(obj: any, prop: string) {
  expect(obj).toHaveProperty(prop);
}

export function expectValue(actual: any, expected: any) {
  expect(actual).toBe(expected);
}

export function expectEmptyObject(obj: any) {
  expect(Object.keys(obj)).toHaveLength(0);
}

export function expectIsArray(obj: any) {
  expect(Array.isArray(obj)).toBe(true);
}

export function expectArrayLength(arr: any[], expected: number) {
  expect(arr.length).toBe(expected);
}

export function expectObjectHasKeys(obj: any, keys: string[]) {
  keys.forEach((key) => expect(obj).toHaveProperty(key));
}

export function expectArrayUniqueValues(arr: any[]) {
  const set = new Set(arr);
  expect(set.size).toBe(arr.length);
}

export function expectType(value: any, type: string) {
  expect(typeof value).toBe(type);
}

export function expectStrictEqual(actual: any, expected: any) {
  expect(actual).toStrictEqual(expected);
}
