const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'movieDB';

async function main() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db(dbName);
        const collection = db.collection('movies');

        // 1. Insert Record
        const newMovie = { title: 'Inception', director: 'Christopher Nolan', rating: 4.8, genre: 'Sci-Fi' };
        await collection.insertOne(newMovie);
        console.log('--- Movie Inserted ---');

        // 2. Find movies with rating > 4.5
        const results = await collection.find({ rating: { $gt: 4.5 } }).toArray();
        console.log('--- Movies with Rating > 4.5 ---');
        console.table(results);
        console.log('--------------------------------');

    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
        console.log('Connection closed.');
    }
}

main();
