const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'pharmacyDB';

async function main() {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('medicines');

        // 1. Insert Medicine
        const newMed = { name: 'Aspirin', expiry_date: '2027-05-15', price: 120.50 };
        await collection.insertOne(newMed);
        console.log('--- Medicine Inserted ---');

        // 2. Display All Medicines
        const meds = await collection.find().toArray();
        console.log('--- All Medicines ---');
        console.table(meds);

    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

main();
