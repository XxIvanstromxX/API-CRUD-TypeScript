import express from "express";
const app = express();
const PORT = 3000;
import UserRouter from "@routes/userRoutes";

app.use(express.json());

app.use("/api", UserRouter)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});