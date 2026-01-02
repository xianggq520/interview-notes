import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// Get the application name from environment variable
// docker-compose.yaml config APP_NAME for each replica
// replica 复制品
const replicaApp = process.env.APP_NAME;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
  console.log(`Request served by ${replicaApp}`);
});

app.listen(port, function () {
  console.log(`${replicaApp} app is start at port ${port}`);
});
