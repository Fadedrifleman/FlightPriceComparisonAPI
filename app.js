import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import dotenv from 'dotenv';
import main from './routes/main.js'

// CONFIG
dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.set('view engine', 'ejs');

// ROUTE
app.use('/', main);

// SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
	console.log(`Server has started successfully at port : ${PORT}`)
);