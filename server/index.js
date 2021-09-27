const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/moviesDB');
const app = express();
const PORT = process.env.PORT || 3001;

// Mongoose
const contactRequestSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    subject: String,
    text: String
});
const contactRequest = mongoose.model('ContactRequest', contactRequestSchema);



// App routing
app.listen(PORT, () => {
    console.log('hey listening');
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', (req, res) => {
    res.send("<h1>Hello there!</h1>");
})
app.post('/contact', (req, res) => {
    console.log('hey now');
    console.log(req.body);
    res.send("success");
})
app.get('/api', (req, res) => {
    res.json(
        { message: 'This is a message from the backend'}
    );
})
app.get('*', (req, res) => {
    res.send('<h1>Nothing here yoyo</h1>');
})