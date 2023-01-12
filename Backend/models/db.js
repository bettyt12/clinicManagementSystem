const mysql = require("mysql");
// const dbConfig = require("../config/db.config.js");
const dbConfig=require("../config/dbConfig")
// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  port:dbConfig.PORT,
  database: dbConfig.DB
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});



// let createPatientTable = `create table if not exists patient(
//   cardNumber int primary key auto_increment,
//   firstName varchar(50)not null,lastName varchar(50)not null,middleName varchar(50)not null,sex varchar(5)not null,age int,woreda varchar(50)not null , kebele varchar(50)not null , phoneNumber varchar(50)not null,entryTime DATE not null,spot varchar(50)not null , cardType varchar(50) ,physician varchar(50) , vistType varchar(50)not null , Admitted boolean default 0
// )`;


// let createServiceTable = `create table if not exists service(
//   id int primary key auto_increment,
//   name varchar(50)not null,discription varchar(300)not null,price int,date DATE not null,
// )`;
// let createlaboratoryCatagoryTable = `create table if not exists laboratoryCatagory(
//   id int primary key auto_increment,
//   name varchar(50)not null,discription varchar(300)not null,date DATE not null,
// )`;
// let createlaboratoryServiceTable = `create table if not exists laboratoryService(
//   id int primary key auto_increment,
//   name varchar(50)not null,discription varchar(300)not null,date DATE not null,
// )`;
// connection.query(createPatientTable, function(err, results, fields) {
// if (err) {
// console.log(err.message);
// }
// });

module.exports = connection;