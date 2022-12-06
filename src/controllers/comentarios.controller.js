import {getConnection} from "./../database/database";

const addComentario=async (req, res)=> {
    try{
        const {texto, usuario, id_reseña} = req.body;
        if(texto == undefined||usuario == undefined||id_reseña == undefined){
            res.status(400).json({message:"Error de solicitud. Por favor llene todos los campos"});
        }

        const comentarios={texto, usuario, id_reseña};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO comentarios SET ?", comentarios);
        res.json({message: "Comentario añadido correctamente"});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const getComentario= async (req, res)=>{
    try {
        console.log(req.params);
        const {usuario}=req.params;
        const connection= await getConnection();
        const result=await connection.query("SELECT texto, fecha, id_reseña usuario FROM comentarios WHERE usuario = ?", usuario);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
const getComentarios= async (req, res)=>{
    try {
        const connection= await getConnection();
        const result=await connection.query("SELECT texto, fecha, id_reseña usuario FROM comentarios");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const updateComentario= async (req, res)=>{
    try {
        const {usuario1}=req.params;
        const {texto, usuario, id_reseña} = req.body;
        if(texto==undefined || usuario == undefined){
            res.status(400).json({message:"Error de solicitud"});
        }
        const comentarios = {texto, usuario, id_reseña};
        const connection= await getConnection();
        const result=await connection.query("UPDATE comentarios SET ? WHERE usuario= ?", [comentarios, usuario1]);
        res.json({message: "Se han actualizado los datos"});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
const deleteComentario= async (req, res)=>{
    try {
        console.log(req.params);
        const {usuario}=req.params;
        const connection= await getConnection();
        const result=await connection.query("DELETE FROM comentarios WHERE usuario = ?", usuario);
        res.json({message: "Se ha eliminado el comentario"});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    addComentario,
    getComentario,
    getComentarios,
    updateComentario,
    deleteComentario
};