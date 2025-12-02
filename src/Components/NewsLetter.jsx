import React from "react";
import { toast } from "react-toastify";

const NewsLetter = () => {

  const newsLetter = (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email!");
      return;
    }

    if (!email) {
      toast.error("Please enter your email!");
      return;
    }
    toast.success(`Thanks ${email}.. You’re now part of our newsletter community 🎉`);
    // console.log(email);
  };

  return (
    <div>
      <div className="bg-white md:w-[50%] mx-auto p-6 rounded-lg shadow-md m-10">
        <h2 className="text-2xl text-center font-bold mb-3">Subscribe to our Newsletter</h2>
        <p className="text-gray-600 mb-4 text-center">
          Get the latest games and updates directly to your inbox!
        </p>
        <form onSubmit={newsLetter} className="flex flex-col sm:flex-row gap-3">
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 p-2 rounded w-full sm:w-auto flex-1"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
