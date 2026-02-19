const db = require("../config/db")

// ================= GET ALL BLOGS =================
const getBlogs = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM blogs ORDER BY id DESC")

        if (rows.length === 0) {
            return res.status(404).send({
                success: false,
                message: "No Record Found",
            })
        }

        res.status(200).send({
            success: true,
            message: "All Blogs Records",
            totalBlogs: rows.length,
            data: rows,
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Get All Blog API",
        })
    }
}



// ================= GET BLOG BY ID =================
const getBlogByID = async (req, res) => {
    try {
        const blogId = req.params.id

        if (!blogId) {
            return res.status(400).send({
                success: false,
                message: "Invalid or Provide Blog id",
            })
        }

        const [rows] = await db.query(
            "SELECT * FROM blogs WHERE id = ?",
            [blogId]
        )

        if (rows.length === 0) {
            return res.status(404).send({
                success: false,
                message: "No Record Found",
            })
        }

        res.status(200).send({
            success: true,
            blogDetails: rows[0],
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Get Blog By ID API",
        })
    }
}



// ================= CREATE BLOG =================
const createBlogs = async (req, res) => {
    try {
        const { title, content } = req.body

        if (!title || !content) {
            return res.status(400).send({
                success: false,
                message: "Please Provide All Fields",
            })
        }

        const [result] = await db.query(
            "INSERT INTO blogs (title, content) VALUES (?, ?)",
            [title, content]
        )

        if (result.affectedRows === 0) {
            return res.status(400).send({
                success: false,
                message: "Error in Insert Query",
            })
        }

        res.status(201).send({
            success: true,
            message: "New Blog Record Created",
            blogId: result.insertId,
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Create Blog API",
        })
    }
}



// ================= UPDATE BLOG =================
const updateBlog = async (req, res) => {
    try {
        const blogId = req.params.id
        const { title, content } = req.body

        if (!blogId) {
            return res.status(400).send({
                success: false,
                message: "Invalid ID",
            })
        }

        if (!title || !content) {
            return res.status(400).send({
                success: false,
                message: "Please provide title and content",
            })
        }

        const [result] = await db.query(
            "UPDATE blogs SET title = ?, content = ? WHERE id = ?",
            [title, content, blogId]
        )

        if (result.affectedRows === 0) {
            return res.status(404).send({
                success: false,
                message: "Blog Not Found",
            })
        }

        res.status(200).send({
            success: true,
            message: "Blog Updated Successfully",
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Update Blog API",
        })
    }
}



// ================= DELETE BLOG =================
const deleteBlog = async (req, res) => {
    try {
        const blogId = req.params.id

        if (!blogId) {
            return res.status(400).send({
                success: false,
                message: "Please Provide Valid Blog Id",
            })
        }

        const [result] = await db.query(
            "DELETE FROM blogs WHERE id = ?",
            [blogId]
        )

        if (result.affectedRows === 0) {
            return res.status(404).send({
                success: false,
                message: "Blog Not Found",
            })
        }

        res.status(200).send({
            success: true,
            message: "Blog Deleted Successfully",
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Delete Blog API",
        })
    }
}

module.exports = {
    getBlogs,
    getBlogByID,
    createBlogs,
    updateBlog,
    deleteBlog,
}
