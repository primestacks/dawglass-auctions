// helper function
export function slugify(text) {
  return text
    .toLowerCase() // lowercase
    .trim() // remove spaces around
    .replace(/\s+/g, "-") // spaces → hyphens
    .replace(/[^\w-]+/g, ""); // remove special characters
}
