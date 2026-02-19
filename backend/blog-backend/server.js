// 1️⃣ Load environment variables FIRST
const dotenv = require('dotenv');
dotenv.config(); // MUST be at the top

// 2️⃣ Import other modules
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');

// 3️⃣ Import DB AFTER dotenv
const mySqlPool = require('./config/db');

// 4️⃣ Express app
const app = express();

// 5️⃣ Middlewares
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:3000",
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));
app.use(express.json());
app.use(morgan('dev'));

// 6️⃣ Routes
app.use("/api/v1/blogs", require('./routes/blogRoutes'));

// 7️⃣ Port
const PORT = process.env.PORT || 5000;

// 8️⃣ Start server ONLY after DB is connected
mySqlPool.query('SELECT 1')
  .then(() => {
    console.log("MYSQL DB Connected".bgCyan.white);

    app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}`.bgMagenta.white);
    });
  })
  .catch((err) => {
    console.log("DB Connection Error:", err);
  });
