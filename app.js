const Connection = require("mysql/lib/Connection");

const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'Richard_kayan',
  password:'123456',
  database:'seu_banco_de_dados'
});
// conectar ao banco de dados
conexao.connect( (err) => {
  if(err) {
    console.log('erro ao conectar ao banco de dados', err);
    return;
  }

  console.log('Conexao ao banco de dados MySQL bem-sucedida!');
})

// execultar consultas ao MySQL

conexao.query('SELECT * FROM sua_tabela', (err, resultados) => {
  if (err) {
    console.error('Erro ao executar consulta:', err);
    return;
  }
  console.log('Resultados da consulta:', resultados);
});

// Fechar a conexão quando terminar
conexao.end((err) => {
  if (err) {
    console.error('Erro ao fechar a conexão:', err);
    return;
  }
  console.log('Conexão ao MySQL encerrada com sucesso!');
});

Connection.end()