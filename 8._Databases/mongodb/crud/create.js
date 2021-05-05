// insert
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017"; // :// means protocol is mongodb
const dbName = "beer";

MongoClient.connect(url, { useUnifiedTopology: true }, (error, client) => {
    if(error){
        throw new Error(error);
    }

    const db = client.db(dbName);
    const brands = db.collection("brands");

    const newBrand = {id:1, name:"Carlsberg"};
    brands.insertOne(newBrand, (error, data) => {
        if(error){
            throw new Error(error);
        }
        console.log("insertedCount: ", data.insertedCount);
        client.close();
    });
});
