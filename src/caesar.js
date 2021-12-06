// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  /**
   * Alphabet shifter
   * @param {String} char - a character of the alphabet
   * @param {Number} shift - a positive or negative number that determines the distance and direction of the cypher shit
   * @returns {String} coded or decoded character
   */
  function shiftChar(char, shift) {
    const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
    if (!ALPHABET.includes(char.toLowerCase())) {
      return char;
    }
    let transformedAlpha = shift > 0 ? ALPHABET : ALPHABET.split("").reverse();
    return transformedAlpha[
      (transformedAlpha.indexOf(char) + Math.abs(shift)) % ALPHABET.length
    ];
  }

  /**
   * Encodes
   * @param {String} message - user input
   * @param {Number} shift - positive negative number that determines the distance and direction of the cypher shit
   * @returns {String}  coded message
   */

  function encoder(message, shift) {
    let result = "";
    // changes input to be lower case only
    message = message.toLowerCase();
    //loops through string by index
    for (let i = 0; i < message.length; i++) {
      //new variable takes message input and switches
      let char = shiftChar(message[i], shift);
      result += char;
    }
    return result;
  }

  /**
   * Decodes
   * @param {String} message - user input
   * @param {Number} shift - negative number that determines the distance and direction of the cypher shit
   * @returns {String} decoded message
   */

  function decoder(message, shift) {
    return encoder(message, -shift);
  }

  /**
   *
   * @param {String} input -  user input
   * @param {Number} shift - shift of the letters, either forward 3(encode) or backwards 3(decode)
   * @param {Boolean} encode - defaulted to true, determines whether encoder or decoder is used
   */

  function caesar(input, shift, encode = true) {
    if (!shift || shift < -25 || shift === 0 || shift > 25) {
      return false;
    }
    if (!encode) {
      return decoder(input, shift);
    }
    return encoder(input, shift);
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
