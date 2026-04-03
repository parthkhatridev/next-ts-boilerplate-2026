/**
 * Safely parse JSON without throwing.
 */
export function safeJsonParse<T>(value: string): T | null {
  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}

/**
 * Convert a pixel value to rem (based on 16px root).
 */
export function pxToRem(px: number): string {
  return `${px / 16}rem`;
}

/**
 * True mathematical modulo (always returns a non-negative result).
 */
export function modulo(n: number, d: number): number {
  return ((n % d) + d) % d;
}

/**
 * Return a random element from a string array.
 */
export function getRandomArrayElement(array: string[]): string {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex] as string;
}

/**
 * Get the ordinal suffix for a day number (st, nd, rd, th).
 */
function getOrdinalSuffix(day: number): string {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

/**
 * Get the current date as a formatted string.
 * e.g. "Friday 3rd April, 2026"
 */
export function getCurrentDate(): string {
  const date = new Date();
  const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
  const day = date.getDate();
  const month = date.toLocaleDateString('en-US', { month: 'long' });
  const year = date.getFullYear();

  return `${weekday} ${day}${getOrdinalSuffix(day)} ${month}, ${year}`;
}
