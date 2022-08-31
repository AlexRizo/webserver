// Type: module
import * as dotenv from 'dotenv';
import path from "path";
import { fileURLToPath, URL } from 'url';
import express from "express";
import hbs from 'hbs';

const app = express();
dotenv.config();
const port = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nombre = 'Alejandro Rizo';
const titulo = 'Curso de Node';

//Handlebars;
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre,
        titulo,
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre,
        titulo,
    });
});

app.get('/elements', (req, res) => {
    res.render('generic', {
        nombre,
        titulo,
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', '404.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});