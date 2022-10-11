/*
    Rutas de Usuarios / Events
    host + /api/events
*/
const {Router} = require('express') //const express = require('express')
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events')
const router = Router()
const{validarJWT}=require('../middlewares/validar-jwt')
const {check} = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos')
const { isDate } = require('../helpers/isDate')
router.use(validarJWT)

//Todas tienen que pasar por la validacion del JWT
//Obtener eventos
router.get('/',getEventos)

//Crear un nuevo eventos
router.post('/',[
    check('title','El titulo es obligatorio').not().isEmpty(),
    check('start','Fecha de inicio es obligatorio').custom(isDate),
    check('end','Fecha de finalizacion es obligatoria').custom(isDate),
    validarCampos
],crearEvento)

//Actualizar evento
router.put('/:id',[
    check('title','El titulo es obligatorio').not().isEmpty(),
    check('start','Fecha de inicio es obligatorio').custom(isDate),
    check('end','Fecha de finalizacion es obligatoria').custom(isDate),
    validarCampos
],actualizarEvento)


//Borrar evento
router.delete('/:id',eliminarEvento)
module.exports = router