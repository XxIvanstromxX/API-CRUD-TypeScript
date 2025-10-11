import { User } from "@/models/User";
import { Request, Response } from "express";
import { randomUUID } from "crypto";

const Users: User[] = [];

export class UserController {
    constructor() {}

    static getUsers(req: Request, res: Response ): Response {
        const datosUser = Users.map(({id, name, email}) => ({id, name, email}))
        return res.status(200).json(datosUser)
    }

    static createUser(req: Request, res: Response): Response {
        const {name, email, password } = req.body
        if(!name || !email || !password){
            return res.status(400).json({message: "Tienes que llenar todos los campos"});
        }
        const newUser: User = {id: randomUUID(), name, email, password};
        Users.push(newUser);
        return res.status(201).json({message: "Usuario creado con exito", user: newUser})
    };

    static updateUser(req: Request, res: Response): Response {
        const {id} = req.params;
        const { name, email, password } = req.body;
        if(!id){
            return res.status(400).json({message: "Parametro 'id' no se envio correctamente"})
        }

        const userIndex = Users.findIndex( user => user.id === id);
        if(userIndex === -1){
            return res.status(404).json({message: "Usuario no encontrado"});
        }

        const existingUser = Users[userIndex];
        const updatedUser: User = {
            ...existingUser,
            name: name ?? existingUser.name,
            email: email ?? existingUser.email,
            password: password ?? existingUser.password
        };

        Users[userIndex] = updatedUser;

        return res.status(200).json({messgae: "Usuario modificado", user: updatedUser});
    };

    static deleteUser(req: Request, res: Response): Response {
        const { id } = req.params;
        if(!id){
            return res.status(400).json({ message: "Parametro 'id' no se envio correctamente" });
        }
        const userIndex = Users.findIndex( user => user.id === id );

        if(userIndex === -1){
            return res.status(404).json({message: "Usuario no encontrado"});
        }

        const userDelete = Users.splice(userIndex, 1);

        return res.status(200).json({message: "Usuario eliminado con exito"})
    };
}