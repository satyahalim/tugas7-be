import express from "express"
import cors from "cors"
import "dotenv/config"
import cookieParser from "cookie-parser"
import NotesRoute from "./routeNotes/NotesRoute.js"
import UserRoute from "./routeNotes/UserRoute.js"

const app = express()
app.use(cors()) //cors digunakan agar app dpt digunakan dimana saja
app.use(express.json())
app.use(cookieParser())
app.use(NotesRoute)
app.use(UserRoute)
app.listen(5000,() => console.log("Server is working on server 5000"))