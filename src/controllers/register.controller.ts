import { NextFunction, Request, Response } from 'express';
import { logger } from '../infrastructure/logger';
import { RegisterService } from '../services/register.service';
import { RegisterModel } from '../models/register.model';

const service = new RegisterService();

export const registerController = {
  registerUsers: async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const registerData: RegisterModel = _req.body;
      const result = await service.registerUsers({ register: registerData });
      res.status(200).json(result);
    } catch (err) {
      logger.error({ err }, 'Error in /ping');
      next(err);
    }
  },
};
