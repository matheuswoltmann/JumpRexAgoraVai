let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function entrar(){
  let usuario = document.querySelector('#usuario')
  let userLabel = document.querySelector('#userLabel')
  
  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')
  
  let msgError = document.querySelector('#msgError')
  let listaUser = []
  
  let userValid = {
    nome: null,
    user: null,
    senha: null
  }
  
  //ALTERAR PARA CARREGAR A PARTIR DA API
 
  listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
  listaUser?.forEach((item) => {
    if(usuario.value == item.userCad && senha.value == item.senhaCad){
       
      userValid = {
         nome: item.nomeCad,
         user: item.userCad,
         senha: item.senhaCad
       }
      
    }
  })
  


  if(usuario.value == userValid.user && senha.value == userValid.senha){
    window.location.href = '././site/index_2.html'
    
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))
  } else {
    userLabel.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
    usuario.focus()
  }
  
}

 /** 
  const mysql = require('mysql');

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost:5036',
  user: 'matheus',
  password: '123456',
  database: 'jump_rex'
});

// Estabelecendo a conexão
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados MySQL!');
  
  // Exemplo de consulta
  connection.query('SELECT * FROM sua_tabela', (err, results) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      return;
    }
    console.log('Resultados da consulta:', results);
  });

  // Fechar a conexão após a execução das consultas
  connection.end();
});
*/