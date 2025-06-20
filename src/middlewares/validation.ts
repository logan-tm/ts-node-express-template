import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';

export default function validationMiddleware(schema: ZodSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = schema.parse(req.body);
      req.body = validated;
      next();
    } catch (error: any) {
      res.status(400).json({
        message: 'Validation failed',
        details: error.errors,
      });
      return;
    }
  };
}
