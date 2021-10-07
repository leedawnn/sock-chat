const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);


app.get('/', (req, res) => {
    res.send('Express work!');
});
const indexRouter = require('./routes/index');

app.use('/', indexRouter);

server.listen(3000, () => {
    console.log('Express Server is now listening on localhost:3000..');
});
