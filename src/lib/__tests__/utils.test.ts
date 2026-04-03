import { describe, expect, it } from 'vitest';

import { capitalize, cn, createUrl, formatDate, truncate } from '../utils';

describe('cn', () => {
  it('merges class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('handles conditional classes', () => {
    expect(cn('foo', false && 'bar', 'baz')).toBe('foo baz');
  });
});

describe('formatDate', () => {
  it('formats a date string', () => {
    const result = formatDate('2026-01-15');
    expect(result).toContain('January');
    expect(result).toContain('15');
    expect(result).toContain('2026');
  });
});

describe('capitalize', () => {
  it('capitalizes the first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('handles empty strings', () => {
    expect(capitalize('')).toBe('');
  });
});

describe('truncate', () => {
  it('truncates long strings', () => {
    expect(truncate('Hello, World!', 8)).toBe('Hello...');
  });

  it('returns short strings as-is', () => {
    expect(truncate('Hi', 10)).toBe('Hi');
  });
});

describe('createUrl', () => {
  it('creates a URL with params', () => {
    const url = createUrl('/search', { q: 'hello', page: 1 });
    expect(url).toBe('/search?q=hello&page=1');
  });

  it('skips undefined params', () => {
    const url = createUrl('/search', { q: 'hello', page: undefined });
    expect(url).toBe('/search?q=hello');
  });
});
