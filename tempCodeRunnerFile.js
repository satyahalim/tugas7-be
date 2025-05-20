import express from "express"
import cors from "cors"
import NotesRoute from "./routeNotes/NotesRoute.js"

const app = express()
app.use(cors()) //cors digunakan agar app dpt digunakan dimana saja
app.use(express.json())
app.use(NotesRoute)
app.listen(5000,() => console.log("Server is working on server 5000"))