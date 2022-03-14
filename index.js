const express = require('express');
const app = express();
const port = 8080;

app.use('/', express.static('./frontend/src/aboutme/'));

app.listen(port, () => console.log(`Frontend listening on port ${port}!`));