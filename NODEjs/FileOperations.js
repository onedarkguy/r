const fs = require('fs');
const filename = 'sample.txt';

// 1. Create and Write to a file
fs.writeFile(filename, 'This is the first line.\n', (err) => {
    if (err) throw err;
    console.log('File created and data written.');

    // 2. Append to the file
    fs.appendFile(filename, 'This is the appended second line.\n', (err) => {
        if (err) throw err;
        console.log('Data appended.');

        // 3. Read the file
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) throw err;
            console.log('\n--- File Contents ---');
            console.log(data);

            // 4. Delete the file (Uncomment the block below to test deletion)
            /*
            fs.unlink(filename, (err) => {
                if (err) throw err;
                console.log('File deleted successfully.');
            });
            */
        });
    });
});