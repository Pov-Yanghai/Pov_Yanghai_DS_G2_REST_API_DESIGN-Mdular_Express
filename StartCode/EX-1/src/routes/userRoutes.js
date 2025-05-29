import express from 'express';
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from '../controllers/userController.js';
import validateUser from '../middleware/validateUser.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', validateUser, createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
