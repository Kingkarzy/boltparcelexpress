import express from 'express';
import { getAdmin } from '../controllers/admin.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

/**  READ  */

router.get("/:id", verifyToken, getAdmin);

/**  UPDATE  */


export default router; 