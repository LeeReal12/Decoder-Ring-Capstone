const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("Caesar function", () => {
  it("returns false if the shift value is equal to 0", () => {
    const input = "this is a test";
    const shift = 0;
    const actual = caesar(input, shift);

    expect(actual).to.be.false;
  });

  it("returns false if the shift value is less than -25", () => {
    const input = "this is another test";
    const shift = -26;
    const actual = caesar(input, shift);

    expect(actual).to.be.false;
  });

  it("returns false if the shift value is greater than 25", () => {
    const input = "yet another of said tests";
    const shift = 26;
    const actual = caesar(input, shift);

    expect(actual).to.be.false;
  });

  it("returns false if the shift value is not present", () => {
    const input = "testing testing 1 2";
    const actual = caesar(input);

    expect(actual).to.be.false;
  });

  it("encodes a message by shifting the letters to the right", () => {
    const input = "fall";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "idoo";

    expect(actual).to.equal(expected);
  });

  it("decodes a message by shifting the letters to the left", () => {
    const input = "idoo";
    const shift = 3;
    const actual = caesar(input, shift, false);
    const expected = "fall";

    expect(actual).to.equal(expected);
  });

  it("ignores capital letters (treats lowercase and uppercase letters as the same)", () => {
    const lowercaseInput = "WINTER IS COMING";
    const uppercaseInput = "winter is coming";
    const shift = 3;
    const lowercaseCall = caesar(lowercaseInput, shift);
    const uppercaseCall = caesar(uppercaseInput, shift);

    expect(lowercaseCall).to.equal(uppercaseCall);
  });

  it("handles shifts that go past the end of the alphabet", () => {
    const input = "z";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "c";

    expect(actual).to.equal(expected);
  });

  it("maintains spaces and other nonalphabetic symbols in the message, before and after encoding", () => {
    const input = "winter is coming?";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "zlqwhu lv frplqj?";

    expect(actual).to.equal(expected);
  });

  it("maintains spaces and other nonalphabetic symbols in the message, before and after decoding", () => {
    const input = "zlqwhu lv frplqj!";
    const shift = 3;
    const actual = caesar(input, shift, false);
    const expected = "winter is coming!";

    expect(actual).to.equal(expected);
  });

  it("allows for negative shift values that shift to the left", () => {
    const input = "winter is coming";
    const shift = -3;
    const actual = caesar(input, shift);
    const expected = "tfkqbo fp zljfkd";

    expect(actual).to.equal(expected);
  });
});
