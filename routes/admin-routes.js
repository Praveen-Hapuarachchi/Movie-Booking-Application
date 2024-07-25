import express from 'express';
import { addAdmin, adminLogin } from '../controllers/admin-controller.js';

const adminRouter = express.Router();

adminRouter.post("/singup",addAdmin);
adminRouter.post("/login",adminLogin);

export default adminRouter;