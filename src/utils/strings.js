// Capitalize the first letter in supplied string
export const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

// Capitalize the first letter in every word in supplied string
export const titleCase = (s) => s && s
  .toLowerCase()
  .split(' ')
  .map(word => capitalize(word))
  .join(' ');
