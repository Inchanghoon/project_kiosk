const express = require("express");
const app = express();
app.use(express.static("myFiles"));
app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.locals.pretty = true;
const connectionInfo = require("./config")
app.get("/", (req, res) => {
  const mysql = require("mysql");
  const con = mysql.createConnection(connectionInfo);
  let imgSrc = [];
  let menuName = [];
  let menuPrice = [];
  let refillStuff = [];
  let refillKind = [];
  let menuCategory = [];
  let menuInfo = [];
  let memberId = [];
  let memberTel = [];
  let memberPoint = [];
  con.connect((err) => {
    if (err) throw err;
    console.log("connected database");
    //let sql = `SELECT * FROM sangmoo S1 LEFT OUTER JOIN staffCall S2 ON S1.category != S2.kind ORDER BY S1.id`;
    let sql = `SELECT * FROM v_sangmoo; SELECT * FROM sangmooMember`;
    //let sql2 = `SELECT tel, point FROM sangmooMember`;
    con.query(sql, (err, results) => {
      if (err) throw err;
      results[0].forEach((v, i, a) => {
        menuCategory.push([v.category]);
        imgSrc.push([v.imgSrc]);
        menuName.push([v.menu]);
        menuPrice.push([v.price]);
        refillStuff.push([v.whatKindRefill]);
        refillKind.push([v.kind]);
        menuInfo.push([v.info]);
      });
      results[1].forEach((v, i, a) => {
        memberId.push([v.id]);
        memberTel.push([v.tel]);
        memberPoint.push([v.point]);
      });
      res.render("dontTouch", {
        memberId: memberId,
        memberTel: memberTel,
        memberPoint: memberPoint,
        menuInfo: menuInfo,
        refillStuff: refillStuff,
        refillKind: refillKind,
        menuCategory: menuCategory,
        imgSrc: imgSrc,
        menuName: menuName,
        menuPrice: menuPrice,
      });
    });
  });
});
app.post("/member", async (req, res) => {
  const dbConnector = require("mysql");
  const dbCon = dbConnector.createConnection({
    host: "localhost",
    user: "c17st23",
    password: "Cc0VDRloLUXo07L9",
    database: "c17st23",
    multipleStatements: true,
  });
  dbCon.connect((err) => {
    if (err) throw err;
    console.log("member Connected!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    let memPoint = req.body.memPoint;
    let telNum = req.body.telNum;
    let matchFlag = req.body.matchFlag;
    console.log(telNum);
    let checkSql = `SELECT * FROM sangmooMember WHERE tel LIKE '${req.body.telNumber}';`;
    con.query(checkSql, (result) => {
      if (result) {
        res.render("여기다가 pug 파일", { "넘길 이름": result });
      } else {
        let createSql = `INSERT INTO sangmooMember (tel, point) VALUES ('${req.body.telNum}', 0)`;
        con.query(createSql, () => {
          con.query(checkSql, (result3) => {
            res.render("여기다가 pug 파일", { "넘길 이름": result3 });
          });
        });
      }
    });
    //let runSql = `SELECT * FROM sangmooMember; INSERT INTO sangmooMember VALUES (NULL, "${req.body.telNum}", "${req.body.memPoint}")`;
    //let insertSql = `INSERT INTO sangmooMember VALUES (NULL, "${req.body.telNum}", ${req.body.memPoint})`;
    //let updateSql = `UPDATE `;
    //let plusPoint = memPoint + ;
    dbCon.query(runSql, (err, results) => {
      console.log(memberTel);
      console.log("membership table insert");
    });
  });
});
app.listen(4323, () => {
  console.log("Go 4323 port!");
});
