const express = require('express')
const app = express()



app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/dog', function (req, res) {
    res.send('<h1>강아지</h1>')
})


app.get('/cat', function (req, res) {
    res.send('<a href="https://www.youtube.com/watch?v=Tt_tKhhhJqY&t=585s">유튜브주소</a>')
})

app.listen(3000)