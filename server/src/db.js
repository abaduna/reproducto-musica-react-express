const mysql = require("promise-mysql")
//hay que user dotenv 
const connection = mysql.createConnection({
    host:"localhost",
    database:"music",
    user:"root",
    password:"1234"
})

const getConnection = async ()=> await connection;

module.exports ={
    getConnection
}