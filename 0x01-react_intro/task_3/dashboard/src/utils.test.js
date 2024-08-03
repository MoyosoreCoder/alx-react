import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("Utility function tests", () => {
  describe("getFullYear", () => {
    test("returns the current year", () => {
      const currentYear = new Date().getFullYear();
      expect(getFullYear()).toBe(currentYear);
    });
  });

  describe("getFooterCopy", () => {
    test("returns correct string when argument is true", () => {
      expect(getFooterCopy(true)).toBe("Footer for Index Page");
    });

    test("returns correct string when argument is false", () => {
      expect(getFooterCopy(false)).toBe("Footer for Non-Index Page");
    });
  });
});
