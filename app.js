const cheerio = require("cheerio")
const superagent = require("superagent")
const mysql = require("mysql")
const  fs = require("fs")
const  config = {
    dbhost:'localhost',
    dbuser:'root',
    dbpwd:'xxxxx',
    dbbase:'spider',
    sPath:'http://www.zhuoguji8.org/',
    sNum:250
}
var connection = mysql.createConnection({ //创建mysql连接的信息
    host:config.dbhost,//连接mysql地址
    user: config.dbuser, //用户名
    password: config.dbpwd, //密码
    database:config.dbbase,//默认数据库名称
})
connection.connect()//连接mysql
var pageUrls = []
// sqlTest()
for(var i = 244;i <=config.sNum;i++){
    pageUrls.push(config.sPath+i+".html")
}
 pageUrls.forEach(function (path) {
     getInfo(path)
 })
function getInfo(path) {
    console.log(path)
   superagent.get(path).end(function (err,res) {
        if(err){
            console.log("failed")
        }else {
            var $ = cheerio.load(res.text)
            var title = $(".chaptertitle  h1").text()
            var context = $("#BookText").text()
            savedata(title,context)
            // fs.appendFile('book.json',"\n"+JSON.stringify(book), function (err) {
            //     if (err) throw err;
            //     console.log('It\'s saved!');
            // });
            // var theNextLink = $(".bottomlink h2 a").eq(2).attr("href")
            // console.log(theNextLink)
            // if(theNextLink){
            // }else{
            //     console.log("over")
            // }
        }
    })
}
// connection.query('insert into article (title , content) values ("1111","aaaaa")');
function sqlTest() {
    console.log("sql")
    connection.connect()//连接mysql
    connection.query("select * from article", function(err, rs, fields){ //执行select查询
        if (err) throw err;
        console.log(rs[0]);
        return
    });
}
function savedata(title,context) {
    console.log(typeof  title)

    connection.query("insert into article (title , content) values ('"+ title + "','"+context +"')")
    // connection.query("insert into article (title , content) values ('aa','bb')")
    console.log("ok")
}
