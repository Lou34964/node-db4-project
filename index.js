const server = require('./server');

const Port = process.env.port || 5000;

server.listen(Port, ()=>{
  console.log(`Listening on port ${Port}`);
})