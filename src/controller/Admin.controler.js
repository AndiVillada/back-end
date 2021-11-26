const adminCtrl ={}
const Admin = require('../models/Admin.model')
const bcrypt= require('bcryptjs')
const jwt = require('jsonwebtoken')

adminCtrl.crear=async (req,res)=>{
    const {nombre, correo, contrasena}= req.body
    const NuevoAdmin = new Admin({
        nombre,
        correo,
        contrasena 
    })
    const correoAdmin = await Admin.findOne({correo:correo})
    if(correoAdmin){
        res.json({
            mensaje: 'El correo ya existe'
        })
    }
    else{
        NuevoAdmin.contrasena = await bcrypt.hash(contrasena,10)
        const token = jwt.sign({_id:NuevoAdmin._id},'Secreta')
        await NuevoAdmin.save()
        res.json({
            mensaje:'Bienvenido',
            id: NuevoAdmin._id,
            nombre:NuevoAdmin.nombre,
            token
        })
    }
}

module.exports=adminCtrl

