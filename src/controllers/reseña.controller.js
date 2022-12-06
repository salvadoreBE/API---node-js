import {getConnection} from "./../database/database";

const addReseña=async (req, res)=> {
    try{
        const {id_usuario, titulo, texto, libro, tags, visible} = req.body;
        if(id_usuario == undefined||titulo == undefined||texto == undefined||libro == undefined||tags == undefined || visible == undefined){
            res.status(400).json({message:"Error de solicitud. Por favor llene todos los campos"});
        }

        const reseñas={id_usuario, titulo, texto, libro, tags, visible};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO reseñas SET ?", reseñas);
        res.json({message: "Reseña añadida correctamente"});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const getReseña= async (req, res)=>{
    try {
        console.log(req.params);
        const {id}=req.params;
        const connection= await getConnection();
        const result=await connection.query("SELECT id_usuario, titulo, texto, fecha, libro, tags, visible, id FROM reseñas WHERE id = ?", id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
const getReseñas= async (req, res)=>{
    try {
        const connection= await getConnection();
        const result=await connection.query("SELECT id_usuario, titulo, texto, libro, tags, visible, id FROM reseñas");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const updateReseña= async (req, res)=>{
    try {
        const {id}=req.params;
        const {titulo, texto, libro, visible} = req.body;
        if(id==undefined || titulo==undefined){
            res.status(400).json({message:"Error de solicitud"});
        }
        const reseña = {titulo, texto, libro, visible};
        const connection= await getConnection();
        const result=await connection.query("UPDATE reseñas SET ? WHERE id= ?", [reseña, id]);
        res.json({message: "Se han actualizado los datos"});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
const deleteReseña= async (req, res)=>{
    try {
        console.log(req.params);
        const {id}=req.params;
        const connection= await getConnection();
        const result=await connection.query("DELETE FROM reseñas WHERE id = ?", id);
        res.json({message: "Se ha eliminado la reseña"});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    addReseña,
    getReseña,
    getReseñas,
    updateReseña,
    deleteReseña
};