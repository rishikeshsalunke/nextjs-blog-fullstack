const cors = require("cors");
const morgan = require('morgan')
const colors = require('colors')
const express = require('express')
const dotenv = require('dotenv')
const mySqlPool = require('./config/db')

// configure doteenv
dotenv.config()


// rest object 
const app = express()


// middlewares
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


app.use(express.json())
app.use(morgan('dev'))


// routes
app.use("/api/v1/blogs", require('./routes/blogRoutes'));




// Port
const PORT = process.env.PORT || 8080



// conditionaly Listen
mySqlPool.query('SELECT 1').then(() => {

  // MY SQL
  console.log("MYSQL DB Connected".bgCyan.white)

  // listen
  app.listen(PORT, () => {
    console.log(`Server Running on port ${process.env.PORT}`.bgMagenta.white)
  });
}).catch((error) => {
  console.log(error);
  
})


