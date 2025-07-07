import express from 'express';
import { register, login } from '../controllers/user.controller';


const router = express.Router();

// Register route
router.post('/register', register);

// Login route
router.post('/login', login);

export default router;