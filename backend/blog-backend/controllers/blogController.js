const db = require("../config/db");

// GET ALL BLOGS
const getBlogs = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM blogs ORDER BY id DESC");
    if (!rows.length) return res.status(404).json({ success: false, message: "No blogs found" });
    res.status(200).json({ success: true, totalBlogs: rows.length, data: rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error while fetching blogs" });
  }
};

// GET BLOG BY ID
const getBlogByID = async (req, res) => {
  try {
    const blogId = req.params.id;
    const [rows] = await db.query("SELECT * FROM blogs WHERE id = ?", [blogId]);
    if (!rows.length) return res.status(404).json({ success: false, message: "Blog not found" });
    res.status(200).json({ success: true, blogDetails: rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error while fetching blog" });
  }
};

// CREATE BLOG
const createBlogs = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) return res.status(400).json({ success: false, message: "Provide title and content" });

    const [result] = await db.query("INSERT INTO blogs (title, content) VALUES (?, ?)", [title, content]);
    res.status(201).json({ success: true, message: "Blog created", blogId: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error while creating blog" });
  }
};

// UPDATE BLOG
const updateBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const { title, content } = req.body;
    if (!title || !content) return res.status(400).json({ success: false, message: "Provide title and content" });

    const [result] = await db.query("UPDATE blogs SET title = ?, content = ? WHERE id = ?", [title, content, blogId]);
    if (!result.affectedRows) return res.status(404).json({ success: false, message: "Blog not found" });
    res.status(200).json({ success: true, message: "Blog updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error while updating blog" });
  }
};

// DELETE BLOG
const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const [result] = await db.query("DELETE FROM blogs WHERE id = ?", [blogId]);
    if (!result.affectedRows) return res.status(404).json({ success: false, message: "Blog not found" });
    res.status(200).json({ success: true, message: "Blog deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error while deleting blog" });
  }
};

module.exports = { getBlogs, getBlogByID, createBlogs, updateBlog, deleteBlog };
