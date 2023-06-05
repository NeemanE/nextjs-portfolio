// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("meqwbabk");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <section
      id="contact"
      className="flex flex-row py-12 bg-gradient-to-r from-blue-500 to-blue-700"
    >
      <div className="flex-1 px-16 flex flex-col justify-center">
        <h2 className="text-3xl text-white font-bold">Get In Touch</h2>
        <p className="text-white text-xl mt-4 ">
          Be sure to contact us for all your web development needs. We are
          always ready to assist you in bringing your ideas to life. Fill out
          the form and we'll get back to you promptly. Let's build something
          great together!
        </p>
      </div>
      <div className="flex-1">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <label htmlFor="name" className="block font-medium mb-2 text-white">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-green-500"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <label htmlFor="email" className="block font-medium mb-2 text-white">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-green-500"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label
            htmlFor="message"
            className="block font-medium mb-2 text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            style={{ resize: "none" }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-green-500"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-green-500 text-white font-medium py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
          >
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
        
      </div>
    </section>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
