import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Banner = () => {
  const { user } = use(AuthContext);
  const isAuthenticated = !!user && user.isAnonymous === false;
  return (
    <div>
      {/* banner  */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center bg-indigo-50 p-10 rounded-2xl shadow-xl mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-800 mb-3">
            {isAuthenticated
              ? `Welcome back, ${user.displayName || "User"}!`
              : "Welcome to FinEase"}
          </h1>
          <p className="text-xl text-indigo-600 font-medium">
            "The best way to predict the future is to create it. Start managing
            your money today."
          </p>
        </div>
      </section>
    </div>
  );
};

export default Banner;
