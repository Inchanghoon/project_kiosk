const express = require('express');
const app = express();
app.locals.pretty = true;
app.use(express.static("myFiles"));
const mysql = require('mysql');
app.set('view engine', 'views');
app.set('views', 'views');
const con = mysql.createConnection({
	host: 'localhost',
	user: 'c17st23',
	password: 'Cc0VDRloLUXo07L9',
	database: 'c17st23'
});
app.get('/', (req, res) => {
	let printString = "";
	let printHtml1 = `
<!doctype html>
<html lang="ko">
	<head>
		<meta charset="utf-8">
		<title>SANGMOO SUSHI</title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
		<style>
			*{margin: 0; padding: 0;}
			.mainBox{
				width: 200px; height: 200px; text-align: center; font-size: 16px;
			}
			img{ width: 200px; height: 200px; }
			.printArea{
				width: 200px; height: 200px; position: absolute; top: 5%; left: 30%;
				background: gold;
			}
		</style>
	</head>
	<body>
		<div class="mainBox">`;
	let printHtml2 = "";
	let printHtml3 = `
		</div>
		<script>
			let calArray1 = [];
			let calPrice1 = 0;
			let thisPrice = 0;
			let countNum = 0;
			$("img").on("click", e => {
				console.log(e.target.alt);
				thisPrice = e.target.name;
				console.log('가격: ' + thisPrice);
				calArray1.push(e.target.name);
				for(let i=0; i<calArray1.length; i++){
					calPrice1 += Number(calArray1[i]);
				}
				calArray1 = [];
				console.log('totla: ' + calPrice1);
			});

		</script>
	</body>
</html>
	`;
	printString += printHtml1;
	//con.connect((err) => {
		//if(err) throw err;
		//console.log("connected database");
		let sql = `SELECT * FROM sangmoo WHERE id`;
		con.query(sql, (err, result) => {
			if (err) throw err;
			result.forEach((v,i,a) => {
				printHtml2 = `
		<img id="${v.imgSrc}" src="./images/${v.imgSrc}" name="${v.price}" alt="${v.menu}">
		<div id="menuName${i}">${v.menu}</div>
		<div>${v.price}원</div>
				`;
				printString += printHtml2;
			});
			printString += printHtml3;
			res.send(printString);
		});
	});
//});
app.listen(4322, () => {
	console.log('Connected 4322 port!');
});