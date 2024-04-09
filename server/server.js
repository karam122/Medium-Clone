import express from 'express';

const server = express();

let PORT = 8000;

server.listen(PORT, () => {
  console.log(`Server iSs Running on PORT ${PORT}`);
});
