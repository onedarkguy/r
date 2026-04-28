const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;
    
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if (query.a && query.b) {
        const a = parseFloat(query.a);
        const b = parseFloat(query.b);
        
        res.write(`Addition (${a} + ${b}): ${a + b}\n`);
        res.write(`Subtraction (${a} - ${b}): ${a - b}\n`);
        res.write(`Multiplication (${a} * ${b}): ${a * b}\n`);
        res.end(`Division (${a} / ${b}): ${a / b}`);
    } else {
        res.end('Please provide parameters a and b. Example: http://localhost:3000/?a=10&b=5');
    }
});

server.listen(3000, () => {
    console.log('Calculator server running on port 3000...');
});