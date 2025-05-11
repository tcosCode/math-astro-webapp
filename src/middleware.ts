import { clerkMiddleware, createRouteMatcher } from "@clerk/astro/server";

const isProtectedRoute = createRouteMatcher([
  "/7mo(.*)",
  "/8vo(.*)",
  "/9no(.*)",
  "/10mo(.*)",
  "/11no(.*)",
  "/12mo(.*)",
]);

export const onRequest = clerkMiddleware((auth, context) => {
  const { userId, redirectToSignIn } = auth();

  if (isProtectedRoute(context.request) && !userId) {
    return redirectToSignIn();
  }
});
