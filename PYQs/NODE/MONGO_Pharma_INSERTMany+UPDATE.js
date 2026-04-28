const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'pharmacy_DB';

async function main() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db(dbName);
        const collection = db.collection('pharmacy');

        // 1. Insert Multiple Medicines using insertMany
        const newMeds = [
            { medicine_name: 'Crocin', expiry_date: '2027-05-15' },
            { medicine_name: 'Aspirin', expiry_date: '2026-12-20' },
            { medicine_name: 'Paracetamol', expiry_date: '2028-01-10' }
        ];
        
        const result = await collection.insertMany(newMeds);
        console.log(`--- ${result.insertedCount} Medicines Inserted ---`);

        // 2. Display All Medicines
        const meds = await collection.find().toArray();
        console.log('--- All Medicines in Pharmacy ---');
        console.table(meds);

        // 3. Update medicine expiry date with name crocin
        const updateResult = await collection.updateOne(
            { medicine_name: 'Crocin' },
            { $set: { expiry_date: '2029-06-15' } }
        );
        console.log(`--- Medicine Updated ---`);
        console.log(`Matched: ${updateResult.matchedCount}, Modified: ${updateResult.modifiedCount}`);

        const updatedMeds = await collection.find().toArray();
        console.log('--- Updated Medicines in Pharmacy ---');
        console.table(updatedMeds);

    } catch (err) {
        console.error('Error during database operations:', err);
    } finally {
        await client.close();
        console.log('Connection closed.');
    }
}

main();