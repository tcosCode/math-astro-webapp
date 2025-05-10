import type { APIRoute } from "astro";

export const GET: APIRoute = ({ request, params }) => {
  return new Response(
    JSON.stringify({
      greeting: "Hello",
    }),
  );
};

export const POST: APIRoute = ({ request, params }) => {
  return new Response(
    JSON.stringify({
      greeting: "Hello",
    }),
  );
};
