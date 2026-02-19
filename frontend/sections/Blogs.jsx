"use client";

import { useEffect, useState } from "react";

export function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const API = process.env.NEXT_PUBLIC_API_URL;;

  // ================= GET ALL =================
  const fetchBlogs = async () => {
    try {
      const res = await fetch(`${API}/getall`);
      const data = await res.json();
      setBlogs(data.data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section className="my-10 px-4 text-foreground">
      <h1 className="text-3xl font-bold mb-6">My Blogs</h1>

      <div className="grid gap-6">
        {blogs?.map((blog) => (
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
