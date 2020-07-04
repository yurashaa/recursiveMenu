const { Router } = require('express');

const {menuController} = require('../../controllers');
const {authMiddlewares: {isAuth}} = require('../../middlewares');

const menuRouter = Router();

menuRouter.get('/', isAuth, menuController.getAllItems);

module.exports = menuRouter;
