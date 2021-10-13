import express from 'express';
import apiRouter from './routes/_index';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`app server running on port ${PORT}...`));
