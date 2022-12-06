import express, { application } from "express";
import morgan from "morgan";

//routes
import usuarioRoutes from "./routes/usuario.routes";
import reseñasRoutes from "./routes/reseñas.routes";
import librosRoutes from "./routes/libros.routes";
import comentariosRoutes from "./routes/comentarios.routes";


const app=express();

//Settings
app.set("port", 3308);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/usuarios/resenas", reseñasRoutes);
app.use("/api/usuarios/libros", librosRoutes);
app.use("/api/usuarios/comentarios", comentariosRoutes);

export default app;