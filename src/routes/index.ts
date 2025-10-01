import { Router } from 'express';
import helthRoutes from './helth.routes';

const router = Router();

router.use('/ping', helthRoutes);

export default router;
