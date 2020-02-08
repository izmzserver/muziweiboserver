const express = require('express');
const app = express();
const users = require('./app/router/api/users')
const api = require('./app/router/api');
app.use('/api', api);
app.listen(3000, () => console.log('app listening on port 3000'))