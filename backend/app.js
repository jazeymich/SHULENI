import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import studentRouter from './routers/studentRouter.js';
import eventsRouter from './routers/studentRouter.js';
import { dbConnection } from './database/dbConnection.js';

const app = express();
config({ path: './config/config.env' });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/students', studentRouter);
app.use('/api/v1/events', eventsRouter);

app.use((err, req, res, next) => {
  errorHandler(err, req, res, next);
});

dbConnection();

export default app;
