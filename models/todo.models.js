const todos = require("../db/todo.json");


function findAll(){
    return new Promise((resolve, reject)=>{
        resolve(todos)
    })
}

function findById(id){
    return new Promise((resolve, reject)=>{
        const singleTodo = todos.find((p) => p.id === id)
        resolve(singleTodo)
    })
}

module.exports ={
    findAll,
    findById
}
