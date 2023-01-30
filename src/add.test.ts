import { test, expect } from "vitest";
import { add } from "./add";

test("add function should  return value ", () => {
  expect(add(1)).toEqual(2);
});
