import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "aa8dda82-707a-4b06-a143-5d45ec3c8a8a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form submitted successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center text-center mt-8 sm:mt-12" id="contact">
        <p className="text-4xl sm:text-5xl font-light">
          <span className="font-bold">Contact</span>{" "}
          <span className="underline underline-offset-4 decoration-1 text-gray-800">
            With Us
          </span>
        </p>
        <p className="text-lg sm:text-xl text-gray-400 mt-2">
          Ready to make a move? Let's build your
        </p>
        <p className="text-lg sm:text-xl text-gray-400 mt-1">Future Together</p>
        <form onSubmit={onSubmit} className="mt-6 sm:mt-10 w-full max-w-3xl px-4">
    
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
           
            <div className="w-full sm:w-1/2 text-left">
              <label className="block text-gray-600 mb-2">Your Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Name"
                name="Name"
                required
              />
            </div>

            <div className="w-full sm:w-1/2 text-left">
              <label className="block text-gray-600 mb-2">Your Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Email"
                name="Email"
                required
              />
            </div>
          </div>

          <div className="w-full text-left mb-6">
            <label className="block text-gray-600 mb-2">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded py-2 px-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Message"
              name="Message"
              required
              rows="4"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300 focus:ring-2 focus:ring-blue-400"
            >
              {result ? result : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
