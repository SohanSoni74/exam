const express = require('express');
const appForEmps = express.Router();
const mysql = require('mysql');
const config = require('config');
var connection = mysql.createConnection({
    host : config.get("host"),
    user : config.get("user"),
    password : config.get("password"),
    database : config.get("database"),
})

appForEmps.get("/", (request, response) =>{
    var query = `SELECT * FROM EMP`;
    connection.query(query, (error, result) =>{

                        if(error == null){
                            response.setHeader("Content-Type", "application/json");
                            response.write(JSON.stringify(result));
                        }
                        else{
                            console.log(error);
                            response.setHeader("Content-Type", "application/json");
                            response.write(error);
                        }
                response.end();

    })

})

appForEmps.post("/", (request, response) =>{
    var query = `INSERT INTO EMP VALUES(${request.body.No}, '${request.body.Name}', '${request.body.Address}')`;
    connection.query(query, (error, result) =>{

                        if(error == null){
                            response.setHeader("Content-Type", "application/json");
                            response.write(JSON.stringify(result));
                        }
                        else{
                            console.log(error);
                            response.setHeader("Content-Type", "application/json");
                            response.write(error);
                        }
                response.end();

    })

})
 
appForEmps.put("/:No", (request, response) =>{
    var query = `UPDATE EMP SET Name = '${request.body.Name}', Address = '${request.body.Address}' WHERE NO = ${request.params.No}`;
    connection.query(query, (error, result) =>{

                        if(error == null){
                            response.setHeader("Content-Type", "application/json");
                            response.write(JSON.stringify(result));
                        }
                        else{
                            console.log(error);
                            response.setHeader("Content-Type", "application/json");
                            response.write(error);
                        }
                response.end();

    })

})
 
appForEmps.delete("/:No", (request, response) =>{
    var query = `DELETE FROM EMP WHERE No = ${request.params.No}`;
    connection.query(query, (error, result) =>{

                        if(error == null){
                            response.setHeader("Content-Type", "application/json");
                            response.write(JSON.stringify(result));
                        }
                        else{
                            console.log(error);
                            response.setHeader("Content-Type", "application/json");
                            response.write(error);
                        }
                response.end();

    })

})
 

module.exports = appForEmps;
