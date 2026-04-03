import { describe, expect, it, vi } from 'vitest';

import {
  safeJsonParse,
  pxToRem,
  modulo,
  getRandomArrayElement,
  getCurrentDate,
} from '../utils';

describe('safeJsonParse', () => {
  it('parses valid JSON', () => {
    expect(safeJsonParse('{"a":1}')).toEqual({ a: 1 });
  });

  it('parses a JSON array', () => {
    expect(safeJsonParse('[1,2,3]')).toEqual([1, 2, 3]);
  });

  it('returns null for invalid JSON', () => {
    expect(safeJsonParse('not json')).toBeNull();
  });

  it('returns null for an empty string', () => {
    expect(safeJsonParse('')).toBeNull();
  });
});

describe('pxToRem', () => {
  it('converts 16px to 1rem', () => {
    expect(pxToRem(16)).toBe('1rem');
  });

  it('converts 32px to 2rem', () => {
    expect(pxToRem(32)).toBe('2rem');
  });

  it('converts 8px to 0.5rem', () => {
    expect(pxToRem(8)).toBe('0.5rem');
  });

  it('handles 0', () => {
    expect(pxToRem(0)).toBe('0rem');
  });
});

describe('modulo', () => {
  it('returns standard modulo for positive numbers', () => {
    expect(modulo(7, 3)).toBe(1);
  });

  it('returns a non-negative result for negative numbers', () => {
    expect(modulo(-1, 3)).toBe(2);
    expect(modulo(-7, 3)).toBe(2);
  });

  it('returns 0 when evenly divisible', () => {
    expect(modulo(6, 3)).toBe(0);
  });
});

describe('getRandomArrayElement', () => {
  it('returns an element from the array', () => {
    const items = ['a', 'b', 'c'];
    const result = getRandomArrayElement(items);
    expect(items).toContain(result);
  });

  it('returns the only element in a single-item array', () => {
    expect(getRandomArrayElement(['only'])).toBe('only');
  });
});

describe('getCurrentDate', () => {
  it('formats the current date with ordinal suffix', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 3, 3)); // Friday 3rd April, 2026

    expect(getCurrentDate()).toBe('Friday 3rd April, 2026');

    vi.useRealTimers();
  });

  it('uses "st" suffix for the 1st', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 0, 1)); // Thursday 1st January, 2026

    expect(getCurrentDate()).toBe('Thursday 1st January, 2026');

    vi.useRealTimers();
  });

  it('uses "th" suffix for teens (11th–13th)', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 3, 11)); // Saturday 11th April, 2026

    expect(getCurrentDate()).toBe('Saturday 11th April, 2026');

    vi.useRealTimers();
  });
});
