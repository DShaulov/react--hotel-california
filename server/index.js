const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('hey listening');
})

app.get('/', (req, res) => {
    res.send("<h1>Hello there!</h1>");
})
app.get('/api', (req, res) => {
    res.json(
        { message: 'This is a message from the backend'}
    );
})
app.get('*', (req, res) => {
    res.send('<h1>Nothing here yoyo</h1>');
})