import express from 'express';
import { upload } from '../middlewares/multerMiddleware.js';
import { hospitalRegisterController, hospitalLoginController } from '../controllers/hospitalController.js';
// import { hospitalAuthMiddleware } from '../middlewares/hospitalAuthMiddleware.js';

// router
const router = express.Router();

// routes
router.post('/register', upload.single('profileImage'), hospitalRegisterController);
router.post('/login', hospitalLoginController);

export default router;