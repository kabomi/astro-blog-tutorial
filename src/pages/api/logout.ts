export const prerender = false; // Not needed in 'server' mode
import type { APIRoute } from "astro";
import { isLogged } from "../../store";

export const POST: APIRoute = async ({ request }) => {
  isLogged.set(false);

  return new Response(
    JSON.stringify({
      message: "Success!"
    }),
    { status: 200 }
  );
};