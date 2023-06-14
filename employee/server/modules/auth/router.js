import express from 'express';

import AuthController from './controller';

const router = express.Router();

router.get('/test', AuthController.test);

export default router;
