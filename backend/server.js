import express from "express";
require('dotenv').config();
const mongoose = require("mongoose");

const blogRoutes = require('./routes/posts')

const app = express()

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //listen for requests
    app.listen(process.env.PORT, ()=>{
        console.log(`connected to the db and listening on port ${process.env.PORT}`)
    })
})

.catch((error)=>{
    console.log(error);
})


//routes
app.use('/api/blogs', blogRoutes)

//middleware
app.use(express.json())

