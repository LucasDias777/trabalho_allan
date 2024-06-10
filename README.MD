# Projeto de Autenticador JWT 

Este é um projeto de autenticação simples usando Node.js, Express, Sequelize, SQLite e JWT.

## Vamos aos passos

1. Clone o repositório:
   git clone https://github.com/LucasDias777/trabalho_allan.git
   entra na pasta cd projeto-jwt 
   mete um code . depois já era

2. Depois disso instale as dependencias:

   npm install 

3. Instalar a extensão do Thunder Client no Visual Code! Mais fácil  

4. Execute o servidor: 

mete um node server.js no terminal que roda

O servidor estará rodando na porta 3000 padrao né prof. 

5. Para fazer as requisições no Thunder é assim: 

coloca: POST http://localhost:3000/auth/register

vai na aba Body tu coloca o registro de usuário que quer cadastrar, utilizar o seguinte corpo: 

{
  "name": "Seu Nome",
  "email": "seu Email",
  "password": "Sua Senha"
}

Blz, cadastrou o lindo usuário, agora vai entrar no servidor 

coloca: POST http://localhost:3000/auth/login

na aba Body tu coloca o email e a senha que cadastrou, utilizar o seguinte corpo: 

{
  "email": "Coloca o Email",
  "password": "Coloca a Senha"
}

entrou blz, vai gerar aquela chave marota, agora vamos ver a proteção dela 

coloca: GET http://localhost:3000/protected 

na aba Auth tu coloca no tipo Bearer e dentro do campo Bearer Token tu coloca a chave que foi gerado e gg! 





