import { Router } from 'express';

import { validateCard } from '../Controllers/cardControllers'; 

const router = Router();

router.post('/validate-card', validateCard);

export default router;