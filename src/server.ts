// Incorrect, does not populate in other files
// import dotenv from 'dotenv';
// dotenv.config();

// Correct, populates in other files
import 'dotenv/config';
import logger from './utils/logger';

import app from './app';
const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});

process.on('exit', () => {
  logger.info('Server is shutting down. Goodbye!');
});
