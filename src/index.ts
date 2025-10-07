import express from "express";
import {Request, Response} from "express";
import { randomUUID } from "crypto";
import { User } from "@/models/User";

const app = express();
const PORT = 3000;

app.use(express.json());

const users: User[] = [];

app.get("/users", (req: Request, res: Response)=>{
    res.status(200).json(users);
})

app.post("/users", (req: Request, res: Response)=>{
    if (!req.body || !req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({ 
            error: "Faltan datos requeridos: name, email, password" 
        });
    }

    const {name, email, password} = req.body;
    

    const newUser: User = {id: randomUUID(), name, email, password};
    console.log(newUser)
    users.push(newUser)
    res.json(newUser)
})

app.patch("/users/:id", (req: Request, res: Response)=>{
    const {id} = req.params;
    const {name, email, password} = req.body;

    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
        return res.status(404).json({error: "Usuario no encontrado"});
    }

    const existingUser = users[userIndex];
    const updatedUser: User = {
        ...existingUser,
        name: name ?? existingUser.name,
        email: email ?? existingUser.email,
        password: password ?? existingUser.password,
    };

    users[userIndex] = updatedUser;
    res.json(updatedUser);
})

app.delete("/users/:id", (req: Request, res: Response)=>{
    const {id} = req.params;
    const userIndex = users.findIndex(user => user.id === id);
    if(userIndex === -1){
        return res.status(404).json({message: "The user isn't already exist"});
    }

    const userDelete = users.splice(userIndex, 1)

    console.log("user deleted", userDelete);

    res.status(200).json({message: "The user was deleted", user: userDelete})
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});