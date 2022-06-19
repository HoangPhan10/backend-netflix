
import express from 'express';
import {getUser,createUser, updateUser,getUserId} from '../controllers/users.js'

const router = express.Router();

router.get('/', getUser);
router.post('/',createUser);
router.post('/update',updateUser);
router.get('/get',getUserId)
export default router