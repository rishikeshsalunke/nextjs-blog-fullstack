const express = require('express')
const { getBlogs, getBlogByID, createBlogs, updateBlog, deleteBlog } = require('../controllers/blogController')


// router object
const router = express.Router()


// routes


router.get("/", getBlogs); 
// GET ALL BLOGS LIST  || GET
router.get("/getall", getBlogs)


// GET  BLOGS BY ID
router.get("/get/:id", getBlogByID)


// CREATE  BLOGS || POST
router.post("/create", createBlogs)


// UPDATE  BLOGS
router.put("/update/:id", updateBlog)


// UPDATE  BLOGS || DELETE
router.delete("/delete/:id", deleteBlog)


module.exports = router
