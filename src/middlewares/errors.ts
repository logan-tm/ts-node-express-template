import type { NextFunction, Request, Response } from 'express';
import { CustomError } from '../lib/errors/CustomError';
import debug from 'debug';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const log = debug('app:errors');
  // Handled errors
  if (err instanceof CustomError) {
    const { statusCode, errors, logging } = err;
    if (logging) {
      if (logging === 'full') {
        log(
          JSON.stringify(
            {
              request: { path: req.url, query: req.query, body: req.body, headers: req.headers },
              error: {
                code: err.statusCode,
                errors: err.errors,
                stack: err.stack?.split('\n'),
              },
            }
            // null,
            // 2
          )
        );
      } else if (logging === 'minimal') {
        err.errors.forEach((error) => {
          log(`ERROR ${err.statusCode}: ${error.message} - ${req.url}`);
        });
      }
    }

    res.status(statusCode).send({ errors });
  } else {
    // Unhandled errors
    // console.error(JSON.stringify(err, null, 2));
    const message = err.message || 'Something went wrong';
    res.status(500).send({ errors: [{ message }] });
  }
};

export default errorHandler;
