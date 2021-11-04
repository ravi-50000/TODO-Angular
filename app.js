const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const todoControllers = require('./src/controllers/todo.controller');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/todo-db');

app.get('/data',todoControllers.getAllData);
app.post('/add',todoControllers.addTodo);
app.post('/delete',todoControllers.removeData);
app.listen(3000);