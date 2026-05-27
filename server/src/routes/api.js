import express from 'express';
import { createApi, getApis, deleteApi } from '../controllers/apiController.js';

const router = express.Router();

router.post('/create', createApi);
router.get('/list', getApis);
router.delete('/revoke/:id', deleteApi); // নতুন রিভোক রাউট

export default router;