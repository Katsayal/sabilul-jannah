import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
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
    const validation = contactSchema.safeParse(body);

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

    // In a real application, you would save this to a database.
    // This requires setting the MONGODB_URI environment variable in Netlify.
    console.log("Contact form submission:", validation.data);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message sent successfully!" }),
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
