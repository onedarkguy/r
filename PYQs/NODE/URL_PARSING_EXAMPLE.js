const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    // 1. Parse the URL from the browser
    const parsedUrl = url.parse(req.url, true);
    
    // 2. Extract some details
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;
    const search = parsedUrl.search;

    // 3. Generate a plain text response
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    let responseText = `URL Parsing Demo:\n`;
    responseText += `Pathname: ${path}\n`;
    responseText += `Search String: ${search}\n`;
    responseText += `Query Parameters: ${JSON.stringify(query, null, 2)}\n`;
    
    if (query.name) {
        responseText += `\nHello, ${query.name}! Welcome to Node JS.`;
    }

    res.end(responseText);
});

const port = 4000;
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log(`Try visiting: http://localhost:${port}/search?name=John&age=21`);
});
