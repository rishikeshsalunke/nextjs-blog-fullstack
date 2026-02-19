const express = require('express');
const { getBlogs, getBlogByID, createBlogs, updateBlog, deleteBlog } = require('../controllers/blogController');

const router = express.Router();

// GET ALL BLOGS
router.get("/getall", getBlogs);

// GET BLOG BY ID
router.get("/get/:id", getBlogByID);

// CREATE BLOG
router.post("/create", createBlogs);

// UPDATE BLOG
router.put("/update/:id", updateBlog);

// DELETE BLOG
router.delete("/delete/:id", deleteBlog);

module.exports = router;
