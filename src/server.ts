import path from "path"
import express from "express"
import { errorHandler, logAPICalls } from "./server/RequestHandler"
import router from "./server/Router"

const port = +(process.env.PORT || "3099")
const projectRoot = process.env.NODE_ENV === "production" ? __dirname : path.resolve(__dirname, "dist")
console.log(projectRoot)
const app = express()

app.use(express.json())
app.use(logAPICalls())
app.get("/server.js", (req, res, next) => next({ httpStatus: 403, message: "Access denied" }))
app.use(express.static(path.resolve(projectRoot)))
app.use(router)
app.use((req, res) => res.sendFile(path.resolve(projectRoot, "404.html")))
app.use(errorHandler())
app.listen(port, () => {
  console.log("Server running on http://localhost:" + port)
})
