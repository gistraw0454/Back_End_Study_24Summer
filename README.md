# �ʱ��Ʈ
[���ڵ� Node.js �鿣�� ���� ������ (ft.API ����)](https://www.youtube.com/watch?v=Tt_tKhhhJqY&t=585s)
## npm ����
- `npm init` -> package.json �� ������.
    - ��ġ�� ����� ����ϰ� �����ؼ� �����ϱ�����.
- `node index.js` �� ���� js�ڵ带 �����ų �� �ִ�.
### figlet ���
- `npm install figlet` �� ���� figlet �� �ٿ�޾�����.
    - ���� ��ο����� figlet�� ����� �� �ְ� �Ѵ�.
    - �ڿ� �ɼ� `-g`�� ���̸� ����ǻ���� ���������� figlet�� ����� �� �ְԵȴ�.
    - package-lock.json�� ����ԵǴµ�, package.json�� ���� ���� 
        ```json
        "dependencies": {
            "figlet": "^1.7.0"
        }
        ```
        �� ��Ÿ���� ���� �� �� �ִ�. 1.5.2������ �� ����� ��ġ�� �Ǿ��ٴ°� �뷫������ �� �� �ְ�, package-lock������ ���ݴ� �ڼ��� �� ������ �� �� �ִ�.
    - node_modules ���丮������, figlet�� ��ġ�� ���� �� �� �ִ�.
    - ���� ������ ����, ��� ������ ���� �ڵ带 ����غ���.
- `npm uninstall figlet`���� ��� ������ ����.

### express ���
- node.js �� ����ؼ� �� �����ӿ�ũ�� �����.
    - �������ӿ�ũ : ����Ʈ���忡�� ��û��������, �鿣�忡�� ������ ������ �׷��� ���ϴ� �ϴ°�
- `npm install express`�� ���� express�� ��ġ������.
    ```js
    const express = require('express')
    const app = express()

    app.get('/', function (req, res) {
    res.send('Hello World')
    })

    app.listen(3000)
    ```
    �� ���� ������ �����ָ�, "localhost:3000" �� �����غ���, hello world�� ��µ��� �� �� �ִ�.
    - `Ctrl C`�� ���� ������ �� �� �ִ�.
    - [express ���� Ȩ������](https://expressjs.com/ko/starter/hello-world.html)
    ```js
    const express = require('express')
    const app = express()
    const port = 3000

    app.get('/', (req, res) => {
    res.send('Hello World!')    //���信 Hello World��� ���ڸ� ��� �����ڴ� !
    })

    app.listen(port, () => {    //()�� �Լ�, => �̰� �׳� ������ٶ� ���Ŷ� �Ƚᵵ��
    console.log(`Example app listening on port ${port}`)
    })
    ```
    #### app.listen?
    - 3000��Ʈ�� ���� ����־��µ� (�׻�. listen�ϸ� ��ٸ����־��µ�), port 3000���� ������(������ Ű��), listen�� ����ǰ���, {}�� ����ǰڴ� ��� ��
    
    
    #### ��Ʈ (Port)
    - [��Ʈ �԰�](https://ko.wikipedia.org/wiki/TCP/UDP%EC%9D%98_%ED%8F%AC%ED%8A%B8_%EB%AA%A9%EB%A1%9D)
    - ��Ʈ�� ����־��, ���������� ������ ���������� ���α׷��� ����ż� ���䰡��
    
    #### app.get?
    - http�� ���°��߿� get�޼ҵ�� ���°��� �ްڴ�.
    ![alt text](image.png)
    - app.get ���� ������� /(root) �������� get�Լ��� ����Ǹ� �״����� (�Ķ����?)->{}�ڵ带 �����϶�.
    - �ּ�â�� �̿��� ������ �Ѵ� ? == get ��� ���� �ּ�â�� �Է��ߴ�.

    #### HTTP�޼ҵ� : ��û�� ����, ������ �˸��� ����
    - GET ��� : �ּ�â���� ���� �����͸� ����
    - POST ��� : �ּ�â�� �ƴ϶� �ٵ� � ������ ��� � ��û�� ����
    
    #### ����� (Routing)
    - Ȩ�������ּ� �ڿ� �ٴ� /dasdwa/sadawd/sdawdsa �̷��� �������.
    - `/` �⺻�ּ�

    ### �ݹ��Լ� (callback)
    - �Լ�(������ ������ �Լ�)
    - ex) setTimeout(()=>{},1000)   //1000ms�ڿ� ()=>{}�̶�� �ݹ��Լ��� �����϶�.
    - ���� �Լ����� ������ ������ �� ���. ���߿� ����� �Լ��� {}�κп� �־��ش�.

# �ʱ��Ʈ 2
[nodejs express mysql ������Ʈ�����](https://www.youtube.com/watch?v=hfKmOazBEEQ&list=LL&index=5)
## ejs ��ġ
- `npm install ejs`
- ! + Tab ������ �Ϲ����� html �±׵�(�ڵ��)�� ���´�.

- �����Ų js�� �����ϸ� ������ ���� �ٽ� �Ѿ��� �����̵ǰ�, �׳� ����� ejs�����ֵ��� �����ϸ� ���� ���� ų �ʿ����.

- [phpmyadmin ��ġ](https://program.shstory.co.kr/web/php-%EC%84%A4%EC%B9%98/) �� �����Ͽ� ������״�.

- lib��� �����ͺ��̽��� phpmyadmin���� �����, mysql workbench���� contact��� ���̺��� ����� idx, name, phone, email, memo, regdate�� �Ӽ����� ��������� apply�� ����������.
- .env �� �ֻ����������ְ�, ȯ�溯�� ������������Ѵ�. �̰� �𸣰ڴ�......***
- `npm install mysql2`�� ���ش�.
- `npm install dotenv`�� ���ش�.
```js
const dotenv = require("dotenv");
const mysql = require("mysql2");

dotenv.config();

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : process.env.DATABASE_USERNAME || 'root',
  password : process.env.DATABASE_PASSWORD || '1234',
  database : process.env.DATABASE_NAME || 'lib'
});
```
�� �߰��ؼ� db�� �����Ű��� 
```js
app.post('/contactProc', (req, res) => {
    const { name, phone, email, memo } = req.body;

    const sql = 'INSERT INTO contact (name, phone, email, memo) VALUES (?, ?, ?, ?)';

    connection.query(sql, [name, phone, email, memo], function(err, result) {
        if (err) {
            throw err;
        }
        console.log("�ڷ� 1���� ����");
        res.send("<script>alert('���ǻ��� ���'); location.href='/'; </script>");
    });

    const a = `${name} ${phone} ${email} ${memo}`;

});
```
�̰ɷ�, ��ư������ db�� ������ �ǵ��� ������ָ� �ϼ�.