const todoModel = require('../models/todo.model');

exports.addTodo = async function(todoItem){
    const todo = new todoModel.Todo(todoItem);
    return await todo.save();
}

exports.getAllData = async function(){
    return await todoModel.Todo.find();
    
}
 exports.removeData=async function(id){
    return await todoModel.Todo.deleteOne({"_id":id});
 }