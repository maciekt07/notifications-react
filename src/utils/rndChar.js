/**
 * Generates a random string by randomly alternating the case of a given character
 * and repeating it a random number of times.
 *
 * @param {string} c - The character to use as the base of the random string.
 * @param {number} max - The maximum number of times to repeat the character.
 * @returns {string} The generated random string.
 * @example rndChar("d", 16)
 */
export const rndChar = (c, max) => {
  const repeatCount = Math.floor(Math.random() * max) + 1;
  const firstChar = Math.random() < 0.5 ? c.toLowerCase() : c.toUpperCase();
  const repeatChars = Array(repeatCount - 1)
    .fill()
    .map(() => (Math.random() < 0.5 ? c.toLowerCase() : c.toUpperCase()))
    .join("");
  return firstChar + repeatChars;
};
