const http = require('http');
const fs = require('fs');
const readline = require('readline');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><h2>File Contents:</h2>');

    // Create a read stream and a readline interface
    const fileStream = fs.createReadStream('sample.txt');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    // Handle missing file errors
    fileStream.on('error', () => {
        res.end('<p style="color:red;">Error: sample.txt not found. Please create it first.</p></body></html>');
    });

    // Print each line wrapped in paragraph tags
    rl.on('line', (line) => {
        res.write(`<p>${line}</p>`);
    });

    // Close the HTML tags when the file is fully read
    rl.on('close', () => {
        res.end('</body></html>');
    });
});

server.listen(3000, () => {
    console.log('Line-by-line reader running on port 3000...');
});