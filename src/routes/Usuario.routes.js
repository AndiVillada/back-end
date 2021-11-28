const {Router}=require ('express')
const router = Router()
const UsuarioCtrl =require('../controller/Usuario.controller')
const Auth = require('../helper/Auth')

router.post('/crear',Auth.verificarToken, UsuarioCtrl.crear)
router.get('/listar',UsuarioCtrl.listar)
router.get('/listarId/:id',UsuarioCtrl.listarId)
router.delete('/eliminar/:id',UsuarioCtrl.eliminar)
router.put('/actualizar/:id',UsuarioCtrl.actualizar)
module.exports = router

