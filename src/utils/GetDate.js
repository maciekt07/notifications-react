/**
Returns the current date and time formatted as a string.
@returns {string} The current date and time formatted as a string.
*/
export const getDate = () => {
  const date = new Date().toLocaleDateString(navigator.language, {
    weekday: "short",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  return date;
};
