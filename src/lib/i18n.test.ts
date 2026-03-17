import { getDictionary, resolveLocale } from "@/lib/i18n";

describe("i18n helpers", () => {
  it("resolves unknown locale to english", () => {
    expect(resolveLocale("hi")).toBe("en");
    expect(resolveLocale(undefined)).toBe("en");
  });

  it("returns kannada dictionary when locale is kn", () => {
    expect(getDictionary("kn").nav.menu).toBe("ಮೆನು");
  });
});
