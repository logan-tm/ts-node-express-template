import type { Request, Response, NextFunction } from 'express';
import chalk from 'chalk';
import logger from '../utils/logger';

const expressWinstonMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const startTime = performance.now();
  res.on('finish', () => {
    const endTime = performance.now();
    const responseTime = Math.round((endTime - startTime) * 10) / 10;
    const statusColor = res.statusCode >= 500 ? 'red' : res.statusCode >= 400 ? 'yellow' : 'green';
    const coloring = chalk[statusColor];
    logger.http(`${req.method} ${req.originalUrl} - ${coloring(res.statusCode)} - ${responseTime}ms`, {
      request: {
        // a smaller version of the request object
        // just pulling out the most important parts
        url: req.originalUrl,
        method: req.method,
        query: req.query,
        body: req.body,
        params: req.params,
        cookies: req.cookies,
        ip: req.ip,
      },
      response: {
        statusCode: res.statusCode,
        statusMessage: res.statusMessage,
        // headers: res.getHeaders(),
        // body: res.body,
      },
      responseTime,
    });
  });
  next();
};

export default expressWinstonMiddleware;
