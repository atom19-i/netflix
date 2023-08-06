const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const movieRoute = require('./routes/movies')
const listRoute = require('./routes/lists')
const port = process.env.PORT || 8800;
const cors = require('cors')
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
   .then(() => console.log("DB Connection Successful!"))
   .catch((err) => {
    console.error(err);
   });

app.use(express.json());
app.use(cors({ 
  origin: "https://nflix-omega.vercel.app"
 }));
 
 //try here
//  app.use(cors({ 
//   origin: ["http://localhost:3000", "https://origin2.com"]
//  }));
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(port, () => {
    console.log("backend server is running!");
})