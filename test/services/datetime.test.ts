import { describe, expect, test } from "vitest";

import { formatFriendlyDate, formatYearMonthDay } from "@services/datetime";

describe("formatFriendlyDate", () => {
  test("returns the formatted string with zero padded month", () => {
    const date = formatFriendlyDate(new Date(2020, 1, 23));

    expect(date).toBe("23/02/2020");
  });

  test("returns the formatted string with zero padded day", () => {
    const date = formatFriendlyDate(new Date(2020, 11, 3));

    expect(date).toBe("03/12/2020");
  });
});

describe("formatYearMonthDay", () => {
  test("returns the formatted string with zero padded month", () => {
    const date = formatYearMonthDay(new Date(2020, 1, 23));

    expect(date).toBe("2020-02-23");
  });

  test("returns the formatted string with zero padded day", () => {
    const date = formatYearMonthDay(new Date(2020, 11, 3));

    expect(date).toBe("2020-12-03");
  });
});
