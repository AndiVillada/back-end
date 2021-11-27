const mongoose= require('mongoose')
URI=('mongodb+srv://villadaandi:contacto123456@cluster0.vr5dy.mongodb.net/Cluster0?retryWrites=true&w=majority')

mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(db=> console.log('Estoy conectado a la bd:',db.connection.name))
.catch(error=> console.log(error))

module.exports = mongoose
