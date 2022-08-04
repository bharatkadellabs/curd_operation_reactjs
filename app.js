require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const path =require('path')
const app = express()
// const cors = require('cors')



const productRouter = require('./routes/productRoutes');
const authRouter =require('./routes/authRoutes');
// const { notFound, errorHandler } = require('./middlewares/errorMiddle')

const url = process.env.DB_URL
mongoose.connect(url)
.then(() => console.log('connected to mongo DB'))

// app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(cors())

app.use("/product",productRouter)
app.use("/auth",authRouter)
// app.use(notFound)
// app.use(errorHandler)


app.use(express.static(path.join(__dirname + "/public")))
const PORT = process.env.PORT || 8000;
// const server = new http.Server(app);
// const io = new Server(server, {
//     cors: {
//         origin: "https://react-curd-974f2.web.app/",
//         methods: ["GET", "POST"]
//     }
// });

// heroku
// app.get("/",(req,res)=>{
//     res.json("server start")
// })
// if( process.env.NODE_ENV == "production"){
//     app.use(express.static("frontend/build"));
//     const path = require("path");
//     app.get("*",(req,res)=>{
//         res.sendFile(path.resolve(__dirname,'frontend','build','index.html'));
//     })
// }


app.listen(PORT, () => console.log(`running on port ${[PORT]}`))