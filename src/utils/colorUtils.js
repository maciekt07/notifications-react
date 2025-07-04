/**
Creates a new shade of a given hex color by changing its brightness by a given magnitude.
@param {string} hexColor - A hexadecimal color code.
@param {number} magnitude - A value to adjust the brightness of the color.
@returns {string} - A new hex color code with adjusted brightness.
@example newShade("#03a688", 30)
*/
export const newShade = (hexColor, magnitude) => {
  hexColor = hexColor.replace(`#`, ``);
  if (hexColor.length === 6) {
    const decimalColor = parseInt(hexColor, 16);
    let r = (decimalColor >> 16) + magnitude;
    r > 255 && (r = 255);
    r < 0 && (r = 0);
    let g = (decimalColor & 0x0000ff) + magnitude;
    g > 255 && (g = 255);
    g < 0 && (g = 0);
    let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
    b > 255 && (b = 255);
    b < 0 && (b = 0);
    return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
  } else {
    return hexColor;
  }
};

/**
 * Converts a hex color value to CSS RGBA format with alpha.
 * @param {string} hex - The hex color value to convert `(e.g. "#RRGGBB")`.
 * @param {number} alpha - The alpha value to include in the RGBA output `(0 to 1)`.
 * @returns {string} The RGBA color value in CSS format `(e.g. "rgba(R, G, B, A)")`.
 * @example hexToRgba("#ff0000", 0.7) //returns rgba(255, 0, 0, 0.70)
 */
export const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const a = alpha.toFixed(2);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};
