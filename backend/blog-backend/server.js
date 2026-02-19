const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');

const mySqlPool = require('./config/db');

const app = express();


// Middlewares
app.use(cors({
  origin: process.env.CLIENT_URL || "https://nextjs-blog-fullstack-wheat.vercel.app/",
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));

app.use(express.json());

// Routes
app.use("/api/v1/blogs", require('./routes/blogRoutes'));

const PORT = process.env.PORT || 5000;

// Start server after DB connection
mySqlPool.query('SELECT 1')
  .then(() => {
    console.log("MYSQL DB Connected");

    app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("DB Connection Error:", err);
  });
