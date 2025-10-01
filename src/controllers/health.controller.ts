import { Request, Response, NextFunction } from 'express';
import { logger } from '../infrastructure/logger';
import { HealthService } from '../services/health.service';

const service = new HealthService();

export const healthController = {
  ping: async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await service.ping();
      res.status(200).json(result);
    } catch (err) {
      logger.error({ err }, 'Error in /ping');
      next(err);
    }
  },
};
