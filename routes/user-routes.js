import express from "express";
import { addUser, deleteUser, getAllUsers, updateUser } from "../controllers/user-controller.js";

const userRouter = express.Router();

userRouter.get("/",getAllUsers);
userRouter.post("/singup",addUser);
userRouter.put("/:id",updateUser);
userRouter.delete("/:id",deleteUser);

export default userRouter;