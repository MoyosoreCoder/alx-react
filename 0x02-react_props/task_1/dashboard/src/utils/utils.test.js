// utils.js
export function getFooterCopy(isIndex) {
  return isIndex ? "Footer for Index Page" : "Footer for Non-Index Page";
}

// utils.test.js
import { getFooterCopy } from "./utils";

describe("getFooterCopy", () => {
  test("returns correct string when argument is true", () => {
    expect(getFooterCopy(true)).toBe("Footer for Index Page");
  });

  test("returns correct string when argument is false", () => {
    expect(getFooterCopy(false)).toBe("Footer for Non-Index Page");
  });
});
