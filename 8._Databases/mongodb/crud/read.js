//check npm Mongoose for a nice easy to use wrapper around npm mongodb
// find
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017"; // :// means protocol is mongodb
const dbName = "beer";

MongoClient.connect(url,{ useUnifiedTopology: true }, (error, client) => {
    if(error){
        throw new Error(error);
    }

    const db = client.db(dbName);
    const brands = db.collection("brands");

    brands.find().toArray((error, data) => {
        if(error){
            throw new Error(error);
        }
        console.log(data);
        client.close();
    });
});

// find({alcLevel: {$gt: 4}})