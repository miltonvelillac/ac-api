import { Router } from 'express';
import helthRoutes from './helth.routes';
import registerRoutes from './register.routes';

const router = Router();

router.use('/ping', helthRoutes);
router.use('/register', registerRoutes);

export default router;
