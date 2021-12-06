// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  /**
   * Gets cypher
   * @param {String} cypher - cypher to be used for encoding or decoding.
   * @returns {Boolean | Object} - returns if valid other wise false
   */

  function getCypher(cypher) {
    const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
    const result = {
      encoder: {},
      decoder: {},
    };
    // if length is larger than alphabet
    if (cypher.length !== 26) {
      return false;
    }

    for (let i = 0; i < ALPHABET.length; i++) {
      const alpha = ALPHABET[i];
      // check if its unique
      result.encoder[alpha] = cypher[i];
      if (keyAlreadyExists(result.decoder, cypher[i])) {
        //indirection//
        return false;
      }
      result.decoder[cypher[i]] = alpha;
    }

    return result;
  }

  function keyAlreadyExists(obj, key) {
    /*indirection*/
    if (obj[key]) {
      return true;
    }
    return false;
  }

  /**
   *
   * @param {String} input - msg to encode or decode
   * @param {String} alphabet - cypher alphabet
   * @param {Boolean} [encode=true] - encode or decode the msg
   */

  function encoder(msg, cypher, encode) {
    if (encode) {
      return msg
        .split("")
        .map((char) => {
          return cypher.encoder[char];
        })
        .join("");
    }
    return msg
      .split("")
      .map((char) => {
        return cypher.decoder[char];
      })
      .join("");
  }

  function substitution(input, alphabet, encode = true) {
    if (!alphabet) {
      return false;
    }
    const cypher = getCypher(alphabet);

    if (!cypher) {
      return false;
    }
    const msgs = input.split(" ");

    return msgs
      .map((msg) => {
        return encoder(msg, cypher, encode);
      })
      .join(" ");
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
