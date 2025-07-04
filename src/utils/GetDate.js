/**
 * Returns the current date and time in the specified language.
 * @param {string} [lang=navigator.language] - The language code to use for the date and time formatting.
 * @returns {string} A string representing the current date and time formatted according to the specified language.
 * @example getDate("pl")
 */

export const getDate = (lang = navigator.language) => {
  const date = new Date().toLocaleDateString(lang, {
    weekday: "short",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  return date;
};
