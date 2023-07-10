const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const app = express()
app.use(cors('*'))

var connection = mysql.createConnection({
    host : "localhost",
    user:"root",
    password : "shreeram74",
    database: "punedac"
})

app.use(express.json());

app.get('/',(request,response)=>{

    connection.query("select * from Book_Tb",(error,result)=>{
        if(error == null){
            var data = JSON.stringify(result);
            response.setHeader('Content-Type','application/json');
            response.write(data);
        }
        else{
            console.log(error);
            response.setHeader('Content-Type','application/json');
            response.write(error);
        }
        response.end();
    })
})

app.post('/',(request,response)=>{
    var query = `Insert into Book_Tb values(${request.body.id},'${request.body.b_name}','${request.body.author}',${request.body.book_type},'${request.body.price}','${request.body.publishedDate}''${request.body.lang}')`
    connection.query(query,(error,result)=>{
        if(error==null){
            var data = JSON.stringify(result);
            response.setHeader('Content-Type','application/json');
            response.write(data);
        }
        else{
            console.log(error);
            response.setHeader('Content-Type','application/json');
            response.write(data);
        }
        response.end()
    })
})


app.put('/:ENo',(request,response)=>{
    var query = `Update Book_Tb Set dname = '${request.body.price}', doj = '${request.body.lang}' where Id = ${request.params.ENo}`
    connection.query(query,(error,result) =>{
        if(error==null){
            var data = JSON.stringify(result);
            response.setHeader('Content-Type','application/json');
            response.write(data);
        }
        else{
            console.log(error);
            response.setHeader('Content-Type','application/json');
            response.write(data);
        }
        response.end()
    })
})

app.listen(4000, '0.0.0.0',() =>{
    console.log('server started on port 4000')
})
 

 

