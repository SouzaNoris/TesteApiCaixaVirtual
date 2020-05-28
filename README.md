TesteApiCaixaVirtual

Passos para rodar a aplicação: 

Backend: 

1 - Instale o node;<br>
2 - Instale o Mongodb na sua máquina;<br>
3 - Entre na pasta backend e execute "npm install";<br>
4 - Execute npm run start;<br>

//Rotas

// Categoria
post, put, delete http://localhost:8080/categoria;
post http://localhost:8080/categoria/search;

//Lançamento de Caixa
post, put, delete http://localhost:8080/lancamentoCaixa;
post http://loalhost:8080/lancamentoCaixa/search; 
post http://localhost:8080/lancamentoCaixa/resumo;

// Cadastro de Usuario
post, put, delete http://localhost:8080/cadastroUsuario;
post http://localhost:8080/search;


Frontend: 

1 - Entre na pasta frontend\TesteApiCaixaVirtural<br>
2 - Execute npm install;<br>
3 - Execute npm run start;<br>
