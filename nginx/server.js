import express from 'express';
import path from 'path'
import { fileURLToPath } from "url"

const app = express()
const port = 3000

const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.use("/images", express.static(path.join(__dirname, "images")))

app.use("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"))
})

app.listen(port, function() {
  console.log(`node app is start at port ${port}`)
})