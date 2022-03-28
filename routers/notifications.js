
import express from 'express';
import { createNoti, getNoti,updateNoti } from '../controllers/notifications.js';
const router = express.Router();
router.get('/',getNoti)
router.post('/',createNoti);
router.post('/update',updateNoti);
export default router