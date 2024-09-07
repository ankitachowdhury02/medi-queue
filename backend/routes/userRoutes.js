import express from 'express';
import { loginController, logoutController, registerController } from '../controllers/userController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

// router
const router = express.Router();

// routes
router.post('/register', registerController);
router.post('/login', loginController);
router.post('/logout', authMiddleware, logoutController);

export default router;