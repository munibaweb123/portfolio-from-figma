"use client";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted!"); // Replace with backend API integration
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Me</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-blue-500"
        />
        
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-blue-500"
        />
        
        <textarea
          name="message"
          rows={4}
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-blue-500"
        />

        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
          Send Message
        </button>
      </form>

      {/* Social Media Links */}
      <div className="text-center mt-6">
        <p className="text-gray-600">Or connect with me:</p>
        <div className="flex justify-center gap-4 mt-2">
          <Link href="https://linkedin.com/in/sachina" className="text-blue-600">LinkedIn</Link>
          <Link href="https://github.com/sachina" className="text-gray-800">GitHub</Link>
          <Link href="https://dribbble.com/sachina" className="text-pink-500">Dribbble</Link>
        </div>
      </div>
    </div>
  );
}
