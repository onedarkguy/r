const fs = require('fs').promises;
const path = require('path');


const fileName = 'data.txt';
const filePath = path.join(__dirname, fileName);

async function fileoperations() {
    try {
        // 1. Writing to a file (creating it with initial content)
        await fs.writeFile(filePath, 'AWT TEE Exam', 'utf8');
        console.log('File created and initial content written.');

        // 2. Reading from the file
        const data = await fs.readFile(filePath, 'utf8');
        console.log('--- Reading Content ---');
        console.log(data);

        // 3. Appending to the file
        const appendData = `\nUpdated at: ${new Date().toLocaleString()}`;
        await fs.appendFile(filePath, appendData, 'utf8');
        console.log('New data appended successfully.');

        // 4. Reading again to confirm the update
        const updatedData = await fs.readFile(filePath, 'utf8');
        console.log('--- Updated Content ---');
        console.log(updatedData);

    } catch (err) {
        console.error('Error during file operations:', err);
    }
}

fileoperations();
