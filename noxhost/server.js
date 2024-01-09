const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('docs'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/docs/index.html');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
