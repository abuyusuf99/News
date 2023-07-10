const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())

app.use(require('./routes/news.route'))
app.use(require('./routes/category.route'))
app.use(require('./routes/comment.route'))



mongoose.connect("mongodb+srv://Muslim:***Muslim95@cluster0.b4yowf9.mongodb.net/News?retryWrites=true&w=majority")
.then(()=>{
console.log('Успешно соединились с сервером MongoDB');
})
.catch(()=>{
    console.log('Не удалось подключиться к серверу MongoDB');
})


app.listen(4000, () =>{
    console.log('Сервер подключен')
})