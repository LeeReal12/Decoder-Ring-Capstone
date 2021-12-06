const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("Polybius function", () => {
  it("encode the input of letters into numbers", () => {
    const input = "twelve";
    const actual = polybius(input);
    const expected = "442551131551";

    expect(actual).to.equal(expected);
  });
  it("decodes the input of numbers into letters", () => {
    const input = "442551131551";
    const actual = polybius(input, false);
    const expected = "twelve";

    expect(actual).to.equal(expected);
  });
  it("encodes both the letters i and j to 42", () => {
    const input = "ij";
    const actual = polybius(input);
    const expected = "4242";

    expect(actual).to.equal(expected);
  });
  it("decodes the number 42 to (i/j)", () => {
    const input = "42";
    const actual = polybius(input, false);
    const expected = "i/j";

    expect(actual).to.equal(expected);
  });
  it("maintains spaces in the message before and after encoding", () => {
    const input = "i have spaces";
    const actual = polybius(input);
    const expected = "42 32111551 345311315134";

    expect(actual).to.equal(expected);
  });
  it("maintains spaces in the message before and after decoding", () => {
    const input = "42 32111551 345311315134";
    const actual = polybius(input, false);
    const expected = "i/j have spaces";

    expect(actual).to.equal(expected);
  });
});
