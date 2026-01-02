

const express = require("express")
const http = require("http")
const {Server} = require("socket.io")
const path = require("path")

const app = express()
const server = http.createServer(app)

const io = new Server(server)

// app.use(express.static(path.join(__dirname, 'public')));
app.use("/socket.io", express.static(path.resolve(__dirname, "node_modules/socket.io/client-dist/")))

app.get("/", function(req, res) {
  res.sendFile(path.resolve(__dirname, "index.html"))
})


io.on('connect', function(socket) {
  console.log("someone connect...")

  socket.on('disconnect', function() {
    console.log("someone disconnect...")
  })

  socket.on("message", function(message) {
    console.log('send message', message)
    io.emit("message", message)
  })

  socket.on("messagetoother", function(message) {
    console.log('send other message', message)
    socket.broadcast.emit("message", message)
  })
  
})

server.listen(8000, function() {
  console.log("server start on port 8000")
})

