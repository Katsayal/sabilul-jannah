import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

type NewsletterFormInputs = z.infer<typeof newsletterSchema>;

const NewsletterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<NewsletterFormInputs>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormInputs) => {
    try {
      const response = await fetch("/.netlify/functions/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      reset();
    } catch (error) {
      console.error("Failed to submit form:", error);
    }
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Subscribe to our Newsletter
      </h2>
      <p className="text-center mb-6 text-gray-600">
        Stay up to date with our latest news and events.
      </p>
      {isSubmitSuccessful ? (
        <p className="text-green-600 text-center font-bold">
          Thank you for subscribing!
        </p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="w-full sm:w-auto sm:grow">
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      )}
    </div>
  );
};

export default NewsletterForm;
