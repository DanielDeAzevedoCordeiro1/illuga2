const { error } = require('console')
const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'crud'
})

conexao.connect((error) => {
    if(error){
        console.log("Erro: ",error)
        return
    }console.log("Conexao com o banco bem sucedida")
})

module.exports = conexao