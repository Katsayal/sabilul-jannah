import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
      headers: { "Content-Type": "application/json" },
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const validation = newsletterSchema.safeParse(body);

    if (!validation.success) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "Invalid input",
          errors: validation.error.flatten().fieldErrors,
        }),
        headers: { "Content-Type": "application/json" },
      };
    }

    // In a real application, you would save the email to a database.
    // This requires setting the MONGODB_URI environment variable in Netlify.
    console.log(`New newsletter subscription: ${validation.data.email}`);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Successfully subscribed!" }),
      headers: { "Content-Type": "application/json" },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
      headers: { "Content-Type": "application/json" },
    };
  }
};

export { handler };