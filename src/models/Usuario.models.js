const mongoose = require ('mongoose')
const {Schema}= mongoose

const UsuarioSchema=new Schema({

    nombre: String,
    apellido: String,
    edad: Number,
    correo: String,
    date:{type:Date, default: Date.now} 
})

//convertir a modelo

module.exports= mongoose.model('usuario',UsuarioSchema)