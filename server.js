const http = require('http')


const hostname = `192.168.2.117`
const port = `5000`;

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Olá Giovanne!');
})

server.listen(port, hostname, () => {
    console.log(`Servidor rodando http://${hostname}:${port}`)
})

