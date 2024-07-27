const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 1000;
var bodyParser = require('body-parser')

//db 연결시 필수
const dotenv = require("dotenv");
const mysql = require("mysql2");

dotenv.config();

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : process.env.DATABASE_USERNAME || 'root',
  password : process.env.DATABASE_PASSWORD || '1234',
  database : process.env.DATABASE_NAME || 'lib'
});
//db연결 여기까지

connection.connect();
// EJS를 뷰 엔진으로 설정
app.set('view engine', 'ejs');
app.set('views', './views');  // 뷰 디렉토리 설정

app.use(bodyParser.urlencoded({ extended: false })) // 이걸넣어야 body parser쓸수있음.

// 라우팅
app.get('/', (req, res) => {
    res.render('index'); // ./views/index.ejs 렌더링
});

app.get('/profile', (req, res) => {
    res.render('profile'); 
});

app.get('/contact', (req, res) => {
    res.render('contact'); 
});

app.get('/map', (req, res) => {
    res.render('map'); 
});

// get 방식은 query 로 받아오는데, post방식은 body 로 받아와야함
// body 를 처리하기위한 express 미들웨어인 바디파서를 설치해야함
app.post('/contactProc', (req, res) => {
    const { name, phone, email, memo } = req.body;

    const sql = 'INSERT INTO contact (name, phone, email, memo) VALUES (?, ?, ?, ?)';

    connection.query(sql, [name, phone, email, memo], function(err, result) {
        if (err) {
            throw err;
        }
        console.log("자료 1개를 삽입");
        res.send("<script>alert('문의사항 등록'); location.href='/'; </script>");
    });

    const a = `${name} ${phone} ${email} ${memo}`;

});


// 서버 시작
app.listen(port, () => {
    console.log(`서버가 실행되었습니다 주소: http://localhost:${port}`);
});
