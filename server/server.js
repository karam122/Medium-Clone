import express, { json } from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

const server = express();

server.use(express.json());
let PORT = 8000;

mongoose.connect(process.env.DB_LOCATION, {
  autoIndex: true
});

server.post('/signup', (req, res) => {
  res.json(req.body);
});

server.listen(PORT, () => {
  console.log(`Server iSs Running on PORT ${PORT}`);
});
