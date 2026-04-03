/**
 * Shared application types.
 * Keep type definitions colocated with features when possible,
 * and only put truly shared types here.
 */

/** Generic API response wrapper */
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

/** Paginated response */
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

/** Generic error shape */
export interface ApiError {
  message: string;
  code: string;
  statusCode: number;
  details?: Record<string, string[]>;
}

/** Extract params from Next.js dynamic routes */
export type PageParams<T extends Record<string, string>> = {
  params: Promise<T>;
};

/** Extract search params from Next.js pages */
export type PageSearchParams = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

/** Children-only component props */
export type ChildrenProps = {
  children: React.ReactNode;
};
