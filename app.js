const http = require("http")
const dotenv = require("dotenv");
const { getTodos, getTodoById } = require("./controllers/todo.controller");

dotenv.config()

const {PORT}= process.env

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET"){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
        data: 'Hello World!',
        }));
    }else if(req.url === "/get-todos" && req.method === "GET"){
        getTodos(req, res)
    }else if(req.url.match(/\/get-todo\/([0-9]+)/) && req.method === "GET"){
        const id = req.url.split("/")[2]

        getTodoById(req, res, id)
    }else{
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
        data: 'endpoint not found',
        }));
    }

  });

server.listen(PORT,()=>{
    console.log(`server is now live on port ${PORT}`)
})

