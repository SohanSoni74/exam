const express = require('express');
const config = require('config');
const empRelatedRoutes = require('./emps');
const loginRelatedRoutes = require('./login');


const app = express();

app.use((request, response ,next) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    response.setHeader("Access-Control-Allow-Methods", "*");

    next();

})
app.use(express.json());

app.use('/emps', empRelatedRoutes);
app.use('/login', loginRelatedRoutes);


app.listen(config.get("PORT"), '0.0.0.0', () =>{ console.log("Server Connected at "+config.get("PORT"))});