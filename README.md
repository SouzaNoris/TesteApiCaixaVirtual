TesteApiCaixaVirtual

Passos para rodar a aplicação: 

Backend: 

1 - Instale o node;<br>
2 - Instale o Mongodb na sua máquina;<br>
3 - Entre na pasta backend e execute "npm install";<br>
4 - Execute npm run start;<br>

//Rotas

// Categoria<br>
post, put, delete http://localhost:8080/categoria;<br>
post http://localhost:8080/categoria/search;<br>

//Lançamento de Caixa<br>
post, put, delete http://localhost:8080/lancamentoCaixa;<br>
post http://loalhost:8080/lancamentoCaixa/search; <br>
post http://localhost:8080/lancamentoCaixa/resumo;<br>

// Cadastro de Usuario<br>
post, put, delete http://localhost:8080/cadastroUsuario;<br>
post http://localhost:8080/search;<br>


Frontend: 

1 - Entre na pasta frontend\TesteApiCaixaVirtural<br>
2 - Execute npm install;<br>
3 - Execute npm run start;<br>

Para fazer login e cadastrar seu usuário utilize o usuario padrão.<br>

Usuario: admin<br>
senha: admin<br>
