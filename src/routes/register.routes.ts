import { Router } from 'express';
import { registerController } from '../controllers/register.controller';
import { validateRegisterTransaction } from '../middlewares/validate-register.middleware';

const router = Router();

router.post('/', validateRegisterTransaction, registerController.registerUsers);

export default router;
