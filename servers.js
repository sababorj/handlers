var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var exphdb = require('express-handlebars');

app.use(express.json());
app.use(express.urlencoded({ extende : true}));

app.engine("handlebars", exphdb( { defaultLayout :"main"}));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "wish_saver_db"
});

connection.connect( (err) => {
    if (err) throw err
    console.log("connected to the db")
})

app.get("/", (req, res)=> {
    connection.query("SELECT * FROM wishes;", (err, data) => {
        if (err) throw err
        //res.json(data);
        res.render("home", {
            wishes: data
        });
    });
});

app.post("/", (req,res) => {
    connection.query("INSERT INTO wishes (wish) VALUES (?);",[req.body.wish], (err, respo) => {
        if(err) throw err
        res.redirect("/")
    })
})

app.listen(port, ()=> {
    console.log("I am listening to you dude")
});