const todoService = require('../services/todo.service');

exports.addTodo = async function(req,res){
    let result = await todoService.addTodo(req.body);
    res.send(result);
}

exports.getAllData = async function(req,res){
    let result = await todoService.getAllData();
    res.send(result);
}
 exports.removeData = async function(req,res){
     let result = await todoService.removeData(req.body.id);
     res.send(result);
 }