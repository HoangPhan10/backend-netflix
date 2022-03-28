
import express from 'express';
import {getUser,createUser, updateUser} from '../controllers/users.js'

const router = express.Router();

router.get('/', getUser);
router.post('/',createUser);
router.post('/update',updateUser);
export default router