const Auth={}
const jwt = require ('jsonwebtoken')

Auth.verificarToken =(req, res, next)=>{

    if(!req.headers.autorizacion){
        return res.json({
            mensaje: 'No esta autorizado'
        })
    }
    const token = req.headers.autorizacion

    if(token==='null'){
        return res.json({
            mensaje: 'No esta autorizado'
        })
    }
    jwt.verify(token, 'secreta',(error,resultado)=>{
        if(error) return res.json({
            mensaje: 'No esta autorizado'
        })

        next()
    })
}

module.exports= Auth