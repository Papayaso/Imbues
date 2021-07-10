const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Runing app at localhost:${PORT}`)
});
app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, 'index.html'))
});
