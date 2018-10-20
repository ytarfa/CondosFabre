const path = require('path');
const express = require('express');
const app = express();

app.use('/client', express.static(path.resolve(__dirname, 'dist/client/')));
app.use('/images', express.static(path.resolve(__dirname, 'images/')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

const PORT = 8080;
app.listen(PORT, console.log(`Listening on port ${PORT}`));