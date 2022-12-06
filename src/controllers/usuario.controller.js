import {getConnection} from "./../database/database";

const getUsuario= async (req, res)=>{
    try {
        console.log(req.params);
        const {id}=req.params;
        const connection= await getConnection();
        const result=await connection.query("SELECT id, nombre, edad FROM usuario WHERE id = ?", id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
const getUsuarios= async (req, res)=>{
    try {
        const connection= await getConnection();
        const result=await connection.query("SELECT id, nombre, edad FROM usuario");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
const addUsuario=async (req, res)=> {
    try{
        const {nombre, edad} = req.body;
        if(nombre==undefined || edad == undefined){
            res.status(400).json({message:"Error de solicitud. Por favor llene todos los campos"});
        }

        const usuarios={ nombre, edad };
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO usuario SET ?", usuarios);
        res.json({message: "Usuario añadido correctamente"});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
const updateUsuario= async (req, res)=>{
    try {
        const {id}=req.params;
        const {nombre, edad} = req.body;
        if(nombre==undefined||edad == undefined){
            res.status(400).json({message:"Error de solicitud"});
        }
        const usuario = {id, nombre, edad};
        const connection= await getConnection();
        const result=await connection.query("UPDATE usuario SET ? WHERE id= ?", [usuario, id]);
        res.json({message: "Se han actualizado los datos"});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
const deleteUsuario= async (req, res)=>{
    try {
        console.log(req.params);
        const {id}=req.params;
        const connection= await getConnection();
        const result=await connection.query("DELETE FROM usuario WHERE id = ?", id);
        res.json({message: "Se ha eliminado al usuario"});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};
export const methods = {
    getUsuarios,
    getUsuario,
    addUsuario,
    updateUsuario,
    deleteUsuario,

};