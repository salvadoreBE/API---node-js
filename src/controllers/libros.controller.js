import {getConnection} from "./../database/database";

const addLibro=async (req, res)=> {
    try{
        const {titulo, descripcion, autores} = req.body;
        if(titulo == undefined||descripcion == undefined||autores == undefined){
            res.status(400).json({message:"Error de solicitud. Por favor llene todos los campos"});
        }

        const libros={titulo, descripcion, autores};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO libros SET ?", libros);
        res.json({message: "Libro añadido correctamente"});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const getLibro= async (req, res)=>{
    try {
        console.log(req.params);
        const {titulo}=req.params;
        const connection= await getConnection();
        const result=await connection.query("SELECT titulo, descripcion, autores FROM libros WHERE titulo = ?", titulo);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
const getLibros= async (req, res)=>{
    try {
        const connection= await getConnection();
        const result=await connection.query("SELECT titulo, descripcion, autores FROM reseñas");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const updateLibro= async (req, res)=>{
    try {
        const {titulo1}=req.params;
        const {titulo, descripcion, autores} = req.body;
        if(titulo==undefined){
            res.status(400).json({message:"Error de solicitud"});
        }
        const libro = {titulo, descripcion, autores};
        const connection= await getConnection();
        const result=await connection.query("UPDATE libros SET ? WHERE titulo= ?", [libro, titulo1]);
        res.json({message: "Se han actualizado los datos"});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
const deleteLibro= async (req, res)=>{
    try {
        console.log(req.params);
        const {titulo}=req.params;
        const connection= await getConnection();
        const result=await connection.query("DELETE FROM libros WHERE titulo = ?", titulo);
        res.json({message: "Se ha eliminado el libro"});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    addLibro,
    getLibro,
    getLibros,
    updateLibro,
    deleteLibro
};