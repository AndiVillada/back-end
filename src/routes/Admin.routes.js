const{Router} = require('express')
const router =Router()
const AdminCtrl= require('../controller/Admin.controler')

router.post('/crear', AdminCtrl.crear)

module.exports = router
