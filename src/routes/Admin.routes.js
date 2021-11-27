const{Router} = require('express')
const router =Router()
const AdminCtrl= require('../controller/Admin.controler')

router.post('/crear', AdminCtrl.crear)
router.post('/login', AdminCtrl.login)

module.exports = router
