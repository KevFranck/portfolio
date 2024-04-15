'use client'
import React from "react";
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xwkgwjyz");
  if (state.succeeded) {
      return <p className="font-bold mb-5 text-white">Merci de m'avoir contacté!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
      <div className="mb-3">
        <input
          required
          type="text"
          placeholder="Your name"
          name="name"
          className="w-full px-3 py-2 text-sm placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          required
          type="email"
          placeholder="Email"
          name="email"
          className="w-full px-3 py-2 text-sm placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          required
          placeholder="Your message"
          name="message"
          className="w-full px-3 py-2 text-sm placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <button type="submit" disabled={state.submitting} className="px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400">
        Send a message
      </button>
    </form>
  );
};

export default ContactForm;