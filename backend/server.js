const app = require('./config/express')();
const port = app.get('port');
const configDatabase = require('./repository/configDatabase/createDatabaseMongoDb');

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

configDatabase();