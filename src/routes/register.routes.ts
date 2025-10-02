import { Router } from 'express';
import { registerController } from '../controllers/register.controller';

const router = Router();

router.post('/', registerController.registerUsers);

export default router;
