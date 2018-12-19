var express = require('express');
var app = express();

port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout : "main" }));
app.set("view engine", "handlebars");

var mysql = require('mysql');

var connection = mysql.createConnection( {
    host: "localhost",
    port: 3306,
    user : "root",
    password : "password",
    database: "moviePlannerDB"
})

connection.connect( (err) => {
    if (err) throw err
    console.log("connected to the database")
})

app.get("/", (req,res) => {

})

app.post("/", (req,res) => {
    
})

app.listen(port, ()=> {
    console.log("I am listening")
})