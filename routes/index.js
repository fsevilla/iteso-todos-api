const router = require('express').Router();
const authMiddleware = require('./../src/middlewares/auth');
const usersController = require('./../src/controllers/users');


router.use('/users', authMiddleware);

router.get('/users', usersController.listar);
router.get('/users/:id', usersController.ver);
router.post('/users', usersController.crear);
router.put('/users/:id', usersController.editar);
router.delete('/users/:id', usersController.eliminar);

module.exports = router;