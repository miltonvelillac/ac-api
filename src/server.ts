import { app } from './app';
import { env } from './config/env';
import { logger } from './infrastructure/logger';

const server = app.listen(env.PORT, () => {
  logger.info(`🚀 API listening on http://127.0.0.1:${env.PORT}`);
});

process.on('SIGTERM', () => {
  logger.info('SIGTERM received, closing HTTP server');
  server.close(() => process.exit(0));
});
