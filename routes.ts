/**
 * An array of routes that are accessible to the public
 * Theses routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
  "/",
  "/auth/new-verification",
  "/auth/termsOfService",
  "/api/auth/new-verification",
  "/api/search",
];

/**
 * An array of routes that are used for authentication
 * these routes will redirect logging user to /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
  "/api/auth/login",
  "/api/auth/register",
  "/api/auth/reset",
  "/api/auth/new-password",
];

/**
 * The prefix for API authentication routes
 * routes that star with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/";

/**
 * Routes accessible only to administrators
 * These routes require specific permissions to access
 * @type {string[]}
 */
export const adminRoutes = ["/admin/", "/api/admin/"];
