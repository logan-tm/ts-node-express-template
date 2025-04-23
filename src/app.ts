import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import errorHandler from './middlewares/errors';
import indexRouter from './routes/index';
import NotFoundError from './lib/errors/NotFoundError';

// Setup
const app = express();
const inDevelopment = process.env.NODE_ENV === 'development';

if (inDevelopment) {
  console.log('Development mode');
  app.use(morgan('dev'));
}

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public')); // try with localhost:3000/text.txt

// Routes
app.use('/api/v1', indexRouter);

// Since middlewares are called in code order, this will be called if no route is matched
app.use((req, res, next) => {
  next(new NotFoundError());
});

// Error handler
app.use(errorHandler);

export default app;
