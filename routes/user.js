import express from 'express';
import { verifyUserToken } from '../middleware/auth.js';
import { getTrackId } from '../controllers/user.js';

const router  = express.Router();

/** READ */

router.get("/:packageId", verifyUserToken, getTrackId); //get the user id using the query string  

export default router;