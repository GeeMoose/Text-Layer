"use client";

// For handling input states
import { useState } from "react";

// For display toasts
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function Home() {
  // Input states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Form submit handler
  const submitForm = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const res = await fetch("/api/submit", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    });
    // Success if status code is 201
    if (res.status === 201) {
      toast("Thank you for contacting us!", { type: "success" });
    } else {
      toast("Please re-check your inputs.", { type: "error" });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#0093e9] to-[#80d0c7]">
      <ToastContainer />
      <form
        className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full"
        onSubmit={submitForm}
      >
        <h1 className="text-2xl font-bold mb-6">Reach Out To Us</h1>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 uppercase mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full bg-gray-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0093e9]"
          />
        </div>
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 uppercase mb-2"
            >
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@example.io"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-gray-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0093e9]"
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 uppercase mb-2"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="Hi there!"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full bg-gray-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0093e9]"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#0093e9] to-[#80d0c7] text-white font-bold py-2 px-4 rounded-md shadow hover:shadow-lg transition-shadow duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}