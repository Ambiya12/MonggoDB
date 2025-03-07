import express, { application } from 'express';
import connectDB from './client/db.js';
import usersRouter from './routes/usersRouter.js';
import recipesRouter from './routes/recipesRouter.js';
import authRouter from './routes/authRouter.js';

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', usersRouter);

app.use('/api', recipesRouter);

app.use('/api', authRouter);

app.get('/', (req, res) => {
    res.send('Helloo Welcome to Usersss API');
});

connectDB();
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});