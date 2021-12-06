const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("Substitution function", () => {
  it("returns false if no alphabet is given", () => {
    const input = "howdy";
    const actual = substitution(input);
    expect(actual).to.be.false;
  });
  it("returns false if the given alphabet is not exactly 26 characters long", () => {
    const input = "greetings";
    const alphabet = "abc";
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
  });
  it("returns false if the given alphabet contains any duplicate characters", () => {
    const input = "salutations";
    const alphabet = "dsaollllllllllllllllllllll";
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
  });
  it("correctly encodes the given phrase, based on the alphabet given to the function", () => {
    const input = "howdy";
    const alphabet = "pgzxbuqhcljaktiofdeywnvrsm";
    const actual = substitution(input, alphabet);
    const expected = "hivxs";
    expect(actual).to.equal(expected);
  });
  it("correctly decodes the given phrase, based on the alphabet given to the function", () => {
    const input = "hivxs";
    const alphabet = "pgzxbuqhcljaktiofdeywnvrsm";
    const actual = substitution(input, alphabet, false);
    const expected = "howdy";
    expect(actual).to.equal(expected);
  });
  it("maintains spaces in the message, before and after encoding", () => {
    const input = "howdy yall";
    const alphabet = "pgzxbuqhcljaktiofdeywnvrsm";
    const actual = substitution(input, alphabet);
    const expected = "hivxs spaa";
    expect(actual).to.equal(expected);
  });
  it("maintains spaces in the message, before and after decoding", () => {
    const input = "hivxs spaa";
    const alphabet = "pgzxbuqhcljaktiofdeywnvrsm";
    const actual = substitution(input, alphabet, false);
    const expected = "howdy yall";
    expect(actual).to.equal(expected);
  });
});
