"use client";

import { useEffect, useState } from "react";
import AdminDashboard from "@/sections/AdminDashboard";

export default function AdminPage() {
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState("");

  // Check login on page load
  useEffect(() => {
    const savedAuth = localStorage.getItem("adminAuth");
    if (savedAuth === "true") {
      setAuth(true);
    }
  }, []);

  const checkPassword = () => {
    if (password === "admin") {
      localStorage.setItem("adminAuth", "true"); // save login
      setAuth(true);
    } else {
      alert("Wrong password");
    }
  };

  if (!auth) {
    return (
      <div className="p-10">
        <h2 className="text-xl mb-4">Admin Login</h2>

        <input
          type="password"
          className="border p-2"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={checkPassword}
          className="bg-black text-white px-4 py-2 ml-2"
        >
          Login
        </button>
      </div>
    );
  }

  return <AdminDashboard />;
}
