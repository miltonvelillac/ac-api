import { NextFunction, Request, Response } from 'express';
import { logger } from '../infrastructure/logger';
import { RegisterTransactionModel } from '../models/register-transaction.model';
import { RegisterService } from '../services/register.service';

const service = new RegisterService();

export const registerController = {
  registerUsers: async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const registerData: RegisterTransactionModel = _req.body;
      const result = await service.registerUsers({ registerTransaction: registerData });
      res.status(200).json(result);
    } catch (err) {
      logger.error({ err }, 'Error in /register');
      next(err);
    }
  },
};
