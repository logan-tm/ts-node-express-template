import express from 'express';
import debug from 'debug';
import BadRequestError from '../lib/errors/BadRequestError';

const router = express.Router();

router.get('/', (req, res) => {
  const log = debug('app:routes');
  log('Hello, World!');
  res.send('Hello, World!');
});

router.get('/fifty-fifty', (req, res) => {
  const log = debug('app:routes');
  // 50% of the time, throw an error
  if (Math.random() < 0.5) {
    throw new BadRequestError({
      code: 500,
      message: 'Random error occurred',
      context: {
        note: 'Refresh the page to try again with 50/50 chances!',
      },
      logging: 'minimal', // set to 'full' to log the full error details
    });
  } else {
    log('No error occurred!');
    res.send('Happy path!');
  }
});

router.get('/health', (req, res) => {
  res.status(200).send('OK');
});

export default router;
