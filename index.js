const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const db = require('./queries');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.use((req, res, next) => {
//     const error = new Error('Something went wrong');
//     next(error)
// });
// //Error handling middleware
// app.use((err, req, res, next) => {
//     console.error('Error:', err.message);
//     res.status(500).send('Internal Server Error');
// });

app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' });
});

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);

app.listen(port, () => {
    console.log(`App running on port: ${port}`);
});
