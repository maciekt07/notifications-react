/**
 * Converts a hex color value to CSS RGBA format with alpha.
 * @param {string} hex - The hex color value to convert (e.g. "#RRGGBB").
 * @param {number} alpha - The alpha value to include in the RGBA output (0 to 1).
 * @returns {string} The RGBA color value in CSS format (e.g. "rgba(R, G, B, A)").
 * @example hexToRgba("#ff0000", 0.7) //returns rgba(255, 0, 0, 0.70)
 */
export const hexToRgba = (hex, alpha) => {
  // Convert hex to RGB values
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  // Convert alpha value to decimal
  const a = alpha.toFixed(2);
  // Return CSS RGBA value
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};
console.log(hexToRgba("#ff0000", 0.7));
