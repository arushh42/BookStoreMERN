import express from 'express';
import { mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const mongoDBURL = 'mongodb+srv://root:root@bookstores.34mjsfm.mongodb.net/books-collection?retryWrites=true&w=majority';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('abcd');
})


app.use('/books', booksRoute);




mongoose
.connect(mongoDBURL)
.then(()=> {
    console.log('app connected');
    app.listen(5555, () => {
    console.log(`App is listening to port: ${5555}`);
});
})
.catch((error)=> {
    console.log(error);
})






