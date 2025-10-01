import { Logger } from 'pino';
import { Request, Response, NextFunction } from 'express';

export function errorMiddleware(logger: Logger) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
    logger.error({ err }, 'Unhandled error');

    const status = 500;
    const body = {
      error: 'Internal Server Error',
      ...(process.env.NODE_ENV !== 'production' && { detail: String(err) }),
    };
    res.status(status).json(body);
  };
}
