export const prerender = false; // Not needed in 'server' mode
import type { APIRoute } from "astro";
import { isLogged, loggedUsername } from "../../store";
const isProd = import.meta.env.PROD;
const isDev = import.meta.env.DEV;
const { ADMIN_USERNAME, ADMIN_PASSWORD } = import.meta.env;

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const username = data.get("username");
  const password = data.get("password");
  // Validate the data - you'll probably want to do more than this
  if (!username || !password) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }
  if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
    return new Response(
      JSON.stringify({
        message: "Invalid username or password",
      }),
      { status: 401 }
    );
  }
  isLogged.set(true);
  loggedUsername.set(username);
  // Do something with the data, then return a success response
  return new Response(
    JSON.stringify({
      message: "Success!"
    }),
    { status: 200 }
  );
};