'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.get('/', controller.get);
router.get('/:login', controller.getByLogin);
router.get('/admin/:id', controller.getById);
router.get('/favoritos/:favorito', controller.getByFavorito);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;