import { Router } from "express";
import { Request, Response } from "express";
import { UserController } from "@controllers/userController"

const UserRouter = Router();

UserRouter.get("/users", UserController.getUsers)
UserRouter.post("/users", UserController.createUser);
UserRouter.patch("/users/:id", UserController.updateUser);
UserRouter.delete("/users/:id", UserController.deleteUser);

export default UserRouter;