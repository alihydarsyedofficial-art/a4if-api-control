import express from 'express';
import { createApi, getApis } from '../controllers/apiController.js';

const router = express.Router();

// Routes
router.post('/create', createApi);
router.get('/list', getApis);

export default router;