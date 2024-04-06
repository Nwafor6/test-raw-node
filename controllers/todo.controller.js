const todoFile = require("../db/todo.json");
const { findAll, findById } = require("../models/todo.models");


// get all todo from db
const getTodos = async (req, res)=>{
    
    try {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const alltodos = await findAll()
        res.end(JSON.stringify({alltodos}));
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({error}))
    }

}

const getTodoById= async (req, res, id)=>{
    
    try {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const todo = await findById(+id)
        res.end(JSON.stringify({todo}));
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({error}))
    }

}

module.exports={
    getTodos,
    getTodoById
}