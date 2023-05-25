const express = require('express');
const mysql = require("mysql");
const app = express();
app.use(express.static("myFiles"));
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.urlencoded({extended: true}))
app.locals.pretty = true;
//app.get('/', (req, res) => {
//	const con = mysql.createConnection({
//		host: 'localhost',
//		user: 'c17st23',
//		password: 'Cc0VDRloLUXo07L9',
//		database: 'c17st23',
//		multipleStatements: true
//	});
//	//const mysql = require('mysql');
//	let imgSrc = [];
//	let menuName = [];
//	let menuPrice = [];
//	let refillStuff = [];
//	let refillKind = [];
//	let menuCategory = [];
//	let menuInfo = [];
//	let memberId = [];
//	let memberTel = [];
//	let memberPoint = [];
//	con.connect((err) => {
//		if (err) throw err;
//		console.log("connected database");
//		let sql = `SELECT * FROM v_sangmoo; SELECT * FROM sangmooMember`;
//		con.query(sql, (err, results) => {
//			if (err) throw err;
//			results[0].forEach((v,i,a) => {
//				menuCategory.push([v.category]);
//				imgSrc.push([v.imgSrc]);
//				menuName.push([v.menu]);
//				menuPrice.push([v.price]);
//				refillStuff.push([v.whatKindRefill]);
//				refillKind.push([v.kind]);
//				menuInfo.push([v.info]);
//			});
//			results[1].forEach((v,i,a) => {
//				memberId.push([v.id]);
//				memberTel.push([v.tel]);
//				memberPoint.push([v.point]);
//			});
//			res.render("dontTouch", {memberId: memberId, memberTel: memberTel, memberPoint: memberPoint, menuInfo: menuInfo, refillStuff: refillStuff, refillKind: refillKind, menuCategory: menuCategory, imgSrc: imgSrc, menuName: menuName, menuPrice: menuPrice});
//		});
//	});
//});
//app.post("/memberNew", async (req, res) => {
//	const dbCon = mysql.createConnection({
//		host: "localhost",
//		user: "c17st23",
//		password: "Cc0VDRloLUXo07L9",
//		database: "c17st23",
//		multipleStatements: true
//	});
//	dbCon.connect((err) => {
//		if (err) {
//			console.error(err);
//		}
//		console.log(req.body.phoneNumber)
//		let sql = `INSERT INTO sangmooMember (tel, point) VALUES ('${req.body.phoneNumber}', '${req.body.memPoint}')`;	
//		dbCon.query(sql, (err, result) => {
//			sql = `SELECT * FROM sangmooMember WHERE tel LIKE '${req.body.phoneNumber}'`;
//			dbCon.query(sql, (err, result1) => {
//				let [{tel}] = result1
//				console.log(tel)
//				res.json({pointTel: tel});
//			})
//		})
//	})
//})
//app.post('/member', async (req, res) => {
//	const dbCon = mysql.createConnection({
//		host: 'localhost',
//		user: 'c17st23',
//		password: 'Cc0VDRloLUXo07L9',
//		database: 'c17st23',
//		multipleStatements: true
//	});
//	dbCon.connect((err) => {
//		if (err) throw err;
//		console.log('member Connected!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
//		let runSql = `SELECT * FROM sangmooMember WHERE tel LIKE '${req.body.phoneNumber}'`;
//		dbCon.query( runSql, (err, results) => {	
//			if (results) {		// 배열 빈거랑 undefined 걸러줌 업데이트는 나중에 따로
//				console.log(results);
//				let [resultTesting] = results;
//				res.json({result: resultTesting});
//			}/* else {
//				console.log("im in");
//				let creatUserInfo = `INSERT INTO sangmooMember (tel, point) VALUES ('${req.body.phoneNumber}', 0)`;
//				dbCon.query(creatUserInfo, (err, resultTesting) => {
//					console.log(err);
//					console.log(resultTesting);
//					dbCon.query(runSql, (err, resultTesting2) => {
//						let [resultTesting3] = resultTesting2;
//						res.json({result: resultTesting3});
//					});
//				});
//			}*/
//		});
//	});
//})
//app.post('/updatePoint', async (req, res) => {
//	const dbCon = mysql.createConnection({
//		host: 'localhost',
//		user: 'c17st23',
//		password: 'Cc0VDRloLUXo07L9',
//		database: 'c17st23',
//	});
//	dbCon.connect((err) => {
//		if (err) throw err;
//		console.log('update Point!!!!!');
//		let sql = `UPDATE sangmooMember SET point='${req.body.receivePoint}' + point WHERE tel='${req.body.phoneNum}'`;
//		dbCon.query(sql, (err, result) => {
//			if (err) throw err;
//		});
//	});
//});
//app.post('/adminTable', async (req, res) => {
//	const dbCon = mysql.createConnection({
//		host: 'localhost',
//		user: 'c17st23',
//		password: 'Cc0VDRloLUXo07L9',
//		database: 'c17st23',
//	});
//	dbCon.connect((err) => {
//		if (err) throw err;
//		console.log('Insert adminTable');
//		let sql = `INSERT INTO orderTable (telNum, orderPrice, point, foodList) VALUES ('${req.body.adminPhoneNum}', '${req.body.adminOrderPrice}', '${req.body.adminOrderPoint}', '${req.body.adminOrderList}')`;
//		dbCon.query(sql, (err, result) => {
//			if (err) throw err;
//			console.log(result);
//		});
//	});
//});
app.get('/admin', async (req, res) => {
	const dbCon = mysql.createConnection({
		host: 'localhost',
		user: 'c17st23',
		password: 'Cc0VDRloLUXo07L9',
		database: 'c17st23',
	});
	let printDate = [];
	let printNumber = [];
	let printOrder = [];
	let printPrice = [];
	dbCon.connect((err) => {
		if (err) throw err;
		console.log('Connected admin page!!!');
		let sql = `SELECT * FROM orderTable`;
		dbCon.query(sql, (err, result) => {
			if (err) throw err;
			result.forEach((v,i,a) => {
				printDate.push(v.time);
				printNumber.push(v.telNum);
				printOrder.push(v.foodList);
				printPrice.push(v.orderPrice);
			});
			res.render("admin.pug", {printDate: printDate, printNumber: printNumber, printOrder: printOrder, printPrice: printPrice});
		});
	});
});
app.listen(4329, () => {
	console.log('Go 4329 port!');
});
