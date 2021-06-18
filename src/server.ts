import path from "path"
import express from "express"
import { cors, errorHandler, logAPICalls } from "./server/RequestHandler"
import router from "./server/Router"

const port = +(process.env.PORT || "3099")
const isProduction = process.env.NODE_ENV === "production"
const projectRoot = isProduction ? __dirname : path.resolve(__dirname, "dist")
const app = express()

isProduction && app.use(cors())
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
