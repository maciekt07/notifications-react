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
  let repeatCount = Math.floor(Math.random() * max + 1);
  if (repeatCount === 0) {
    repeatCount = 1;
  }
  const firstChar =
    Math.floor(Math.random() * 2) === 0 ? c.toLowerCase() : c.toUpperCase();
  return (
    firstChar +
    [...Array(repeatCount - 1)]
      .map(() => {
        const randomCase =
          Math.floor(Math.random() * 2) === 0 ? "toLowerCase" : "toUpperCase";
        return c[randomCase]();
      })
      .join("")
  );
};
