import express, { Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { env } from '../../config/env';
import { logger } from '../logger';
import { errorMiddleware } from '../../middlewares/error.middleware';
import router from '../../routes';

export function createHttpApp(): Application {
  const app = express();

  // Seguridad y parsing
  app.use(helmet());
  app.use(cors());
  app.use(express.json({ limit: '1mb' }));

  // Si va detrás de Nginx:
  app.set('trust proxy', true);

  // Rutas
  app.use('/api/v1', router);

  // Health root (rápido para lightsail/nginx)
  app.get('/health', (_req, res) => res.json({ status: 'ok', version: '0.1.0' }));

  // Manejo de errores
  app.use(errorMiddleware(logger));

  // Arranque log
  logger.info({ env: env.NODE_ENV }, 'Express app initialized');
  return app;
}
