import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();


const __dirname = path.resolve();
const app = express();



app.use( express.static('public'));


app.get('/', (req, res) => {
    res.sendFile( __dirname + '/public/index.html' )
})

app.get('/generic', (req, res) => {
    res.sendFile( __dirname + '/public/generic.html' )
})

app.get('/elements', (req, res) => {
    res.sendFile( __dirname + '/public/elements.html' )
})


app.get('*', (req, res) => {
    res.send('404 | Page not found')
})

app.listen(process.env.PORT)