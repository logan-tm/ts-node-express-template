import express from 'express';
import debug from 'debug';
import { indexController } from './index.controller';

// [/api/v1]
const router = express.Router();

router.get('/', (req, res) => {
  const log = debug('app:routes');
  log(indexController.getIndex());
  res.send(indexController.getIndex());
});

router.get('/fifty-fifty', (req, res) => {
  const log = debug('app:routes');
  res.send(indexController.getFiftyFifty());
});

router.get('/health', (req, res) => {
  res.status(200).send(indexController.getHealth());
});

export default router;
