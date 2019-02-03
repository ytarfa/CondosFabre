const path = require('path');
const express = require('express');
const app = express();

app.use('/dist', express.static(path.resolve(__dirname, 'dist/')));
app.use('/images', express.static(path.resolve(__dirname, 'images/')));
app.use('/vendor', express.static(path.resolve(__dirname, 'vendor/')));

app.get('*.js', function (req, res, next) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
});

const PORT = 5000;
app.listen(PORT, console.log(`Listening on port ${PORT}`));
