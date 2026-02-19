"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function Blogs() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const API = "/api";
  const [isAdmin, setIsAdmin] = useState(false);

  // Fetch all blogs
  const fetchBlogs = async () => {
    try {
      const res = await fetch(`${API}/getall`);
      const data = await res.json();
      setBlogs(data.data || []);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  // Check if admin is logged in
  useEffect(() => {
    fetchBlogs();
    const savedAuth = localStorage.getItem("adminAuth");
    if (savedAuth === "true") setIsAdmin(true);
  }, []);

  const goAdmin = () => {
    router.push("/admin");
  };

  return (
    <section id="blogs-section" className="my-10 px-4 text-foreground">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">My Blogs</h1>
        {!isAdmin && (
          <button
            onClick={goAdmin}
            className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Admin Login
          </button>
        )}
      </div>

      <div className="grid gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border p-6 rounded bg-card text-foreground"
          >
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
