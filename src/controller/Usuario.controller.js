const UsuarioCtrl={}
const Usuario = require('../models/Usuario.models')

//Petición crear
UsuarioCtrl.crear= async(req,res)=>{
    const{nombre, apellido, edad, correo}= req.body
    const NuevoUsuario = new Usuario({
nombre, 
apellido, 
edad, 
correo
    })
    const respuesta = await NuevoUsuario.save()
    res.json({
        mensaje: 'Usuario creado',
        respuesta
    })
}

//Petición listar
UsuarioCtrl.listar= async(req, res)=>{
    const respuesta = await Usuario.find ()
    res.json(respuesta)
}

//Petición con parametro
UsuarioCtrl.listarId= async(req, res)=>{
    const id= req.params.id
    const respuesta = await Usuario.findById({_id:id})
    res.json(respuesta)
}

//Petición eliminar
UsuarioCtrl.eliminar= async(req,res)=>{
    const id= req.params.id
    await Usuario.findByIdAndRemove({_id:id})
    res.json({
        mensaje: 'Persona eliminada'
    })
}

//Petición Actualizar
UsuarioCtrl.actualizar= async(req, res)=>{
    const id= req.params.id
    await Usuario.findByIdAndUpdate({_id:id}, req.body)
    res.json({
        mensaje:'Persona actualizada'
    })
}


module.exports= UsuarioCtrl


