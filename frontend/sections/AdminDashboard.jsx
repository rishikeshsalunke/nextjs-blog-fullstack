"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// OLD:
// const API = process.env.NEXT_PUBLIC_API_URL;

// NEW:
const API = "/api";

export default function AdminDashboard() {
    const router = useRouter();

    const [blogs, setBlogs] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [editId, setEditId] = useState(null);

    const handleLogout = () => {
        localStorage.removeItem("adminAuth");
        router.push("/");
    };

    const fetchBlogs = async () => {
        try {
            const res = await fetch(`${API}/getall`);
            const data = await res.json();
            setBlogs(data.data);
        } catch (err) {
            console.error("Error fetching blogs:", err);
            alert("Failed to fetch blogs. Please try again later.");
        }
    };


    useEffect(() => {
        fetchBlogs();
    }, []);

    const handleSubmit = async () => {
        try {
            let res;
            if (editId) {
                res = await fetch(`${API}/update/${editId}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ title, content }),
                });
            } else {
                res = await fetch(`${API}/create`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ title, content }),
                });
            }

            const data = await res.json();
            console.log("Create/Update response:", data);

            if (!data.success) {
                alert(data.message || "Something went wrong");
                return;
            }

            setTitle("");
            setContent("");
            setEditId(null);
            fetchBlogs();
        } catch (err) {
            console.error("Error in handleSubmit:", err);
        }
    };

    const handleDelete = async (id) => {
        await fetch(`${API}/delete/${id}`, {
            method: "DELETE",
        });

        fetchBlogs();
    };

    const handleEdit = (blog) => {
        setTitle(blog.title);
        setContent(blog.content);
        setEditId(blog.id);
    };

    return (
        <div className="p-10">
            <h1 className="text-2xl mb-6">Admin Dashboard</h1>

            <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 mb-4 rounded"
            >
                Logout
            </button>

            <input
                className="border p-2 block mb-2"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
                className="border p-2 block mb-2"
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2"
            >
                {editId ? "Update Blog" : "Create Blog"}
            </button>

            <hr className="my-6" />

            {blogs.map((blog) => (
                <div key={blog.id} className="border p-4 mb-4">
                    <h3 className="font-bold">{blog.title}</h3>
                    <p>{blog.content}</p>

                    <button
                        onClick={() => handleEdit(blog)}
                        className="bg-yellow-400 px-3 py-1 mr-2 rounded"
                    >
                        Edit
                    </button>

                    <button
                        onClick={() => handleDelete(blog.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"

                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}
