const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3333;
const app = express();

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));