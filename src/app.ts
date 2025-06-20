import express from 'express';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

import errorHandler from './middlewares/errors';
import indexRouter from './resources/index/index.routes';
import NotFoundError from './lib/errors/NotFoundError';
import expressWinstonMiddleware from './middlewares/logging';
import todoRouter from './resources/todo/todo.routes';

// Setup
const app = express();
// const inDevelopment = process.env.NODE_ENV === 'development';

// Middlewares
app.use(expressWinstonMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public')); // try with localhost:3000/text.txt
app.use(helmet());
app.use(cors());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests, please try again later.',
  })
);

// Routes
app.use('/', indexRouter);
app.use('/todos', todoRouter);

// Since middlewares are called in code order, this will be called if no route is matched
app.use((req, res, next) => {
  next(new NotFoundError());
});

// Error handler
app.use(errorHandler);

export default app;
