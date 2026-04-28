const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'libraryDB';

async function main() {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('books');

        // 1. Insert Book
        const book = { title: 'React Handbook', author: 'Yogesh', publishedYear: 2026, price: 500 };
        await collection.insertOne(book);
        console.log('--- Book Inserted ---');

        // 2. Display All Books
        const books = await collection.find().toArray();
        console.log('--- Library Collection ---');
        console.table(books);

    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

main();
