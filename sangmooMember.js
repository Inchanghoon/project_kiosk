const express = require('express');
const app = express();
const mysql = require('mysql');
const con = mysql.createConnection({
	host: 'localhost',
	user: 'c17st23',
	password: 'Cc0VDRloLUXo07L9',
	database: 'c17st23'
});
//app.use(express.static('myFiles'));
//app.locals.pretty = true;
//app.set('view engine', 'pug');
//app.set('views', './views');
con.connect((err) => {
	if (err) throw err;
	console.log('Connected!');
	let sql = `INSERT INTO staffCall VALUES (NULL, "1인세팅", "stuff"), (NULL, "넵킨/티슈", "stuff"), (NULL, "물티슈", "stuff"), (NULL, "젓가락", "stuff"), (NULL, "숟가락", "stuff"), (NULL, "튀김집게", "stuff"), (NULL, "사시미 집게", "stuff"), (NULL, "앞치마", "stuff"), (NULL, "가위", "stuff"), (NULL, "단무지", "refill"), (NULL, "초생강", "refill"), (NULL, "무순", "refill"), (NULL, "후식", "stuff"), (NULL, "초장/간장", "stuff"), (NULL, "김치", "stuff"), (NULL, "물", "stuff"), (NULL, "토마토/양파", "stuff"), (NULL, "와사비", "stuff"), (NULL, "조미김", "stuff"), (NULL, "얼음", "stuff"), (NULL, "장국", "stuff"), (NULL, "테이블 포장", "etc"), (NULL, "직원 호출하기", "etc")`;
	con.query(sql, (err, result) => {
		if (err) throw err;
		console.log('insert table');
	});
});
