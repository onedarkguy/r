const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "feedback.txt");

if (!fs.existsSync(filePath)) {
    console.log(`${filePath} does not exist. Creating it...`);
    fs.writeFileSync(filePath, 'feedback.txt', 'utf8');
    console.log(`Successfully created ${filePath} and wrote the initial content.`);
} else {
    console.log(`${filePath} already exists.`);
}

// 3. Read from the file
try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log('--- Reading Content ---');
    console.log(data);
    console.log('-----------------------');

    // 4. Write to the file (appending to show both read/write functionality)
    const appendData = `\n username:yogesh \n feedback:nice products \n rating:5`;
    fs.appendFileSync(filePath, appendData, 'utf8');
    console.log('New data appended to the file.');

    // 5. Read again to confirm the write
    const updatedData = fs.readFileSync(filePath, 'utf8');
    console.log('--- Updated Content ---');
    console.log(updatedData);
    console.log('-----------------------');

} catch (err) {
    console.error('Error handling the file:', err);
}