import React, { useState } from "react";

const Login = ({ setAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      setAuthenticated(true);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center overflow-hidden px-2">
      <div className=" flex w-96 flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl sm:mx-auto">
        <div className="mx-auto mb-2 space-y-3">
          <h1 className="text-center text-3xl font-bold text-gray-700">
            Admin Login
          </h1>
        </div>

        <div>
          <div className="relative mt-2 w-full">
            <input
              type="email"
              id="email"
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 "
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div>
          <div className="relative mt-2 w-full">
            <input
              type="password"
              id="password"
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 "
              placeholder="Enter Your Password "
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <button
            className="shrink-0 inline-block w-36 rounded-lg bg-blue-600 py-3 font-bold text-white"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
