var mongoClient = require('mongodb').MongoClient;
const app = require('./config/express')();
const databaseName = app.get('databaseName');

var url = `mongodb://localhost:27017/${databaseName}`;

function createDatabase() {
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;
        console.log("Database created");
        db.close();
    });
}

function createCollection(nameArrayCollection) {
    mongoClient.connect(url, function (err, res) {
        if (err) throw err;
        var dbo = db.db(databaseName);

        nameArrayCollection.array.forEach(nameCollection => {
            dbo.createCollection(nameCollection, function (err, res) {
                console.log("Collection Created");
                db.close();
            });
        });
    });
}

function initializeDatabase() {
    createDatabase();

    var collection = ['login', 'categoria', 'lancamentoCaixa']

    createCollection(collection);
}

module.exports = initializeDatabase;




