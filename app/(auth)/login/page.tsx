import Image from "next/image";
import Link from "next/link";
import Backbutton from "../register/Backbutton";

import type { Metadata } from "next";

// either Static metadata
export const metadata: Metadata = {
  title: "Login Page",
};

const Login = () => {
  return (
    <div
      className="relative container-fluid d-flex align-items-center justify-content-center"
      style={{ height: "100%" }}
    >
      <Backbutton />
      <Image
        src="/img/bg_1.webp"
        alt="login background page image"
        fill={true}
      />
      <div
        className="card shadow-lg p-4"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h2 className="text-center mb-4">Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn bg-theme w-100 text-white">
            Login
          </button>
        </form>
        <p className="text-center mt-3">
          Don't have an account? <Link href="/auth/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
