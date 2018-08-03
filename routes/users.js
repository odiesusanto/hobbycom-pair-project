const routesUser = require('express').Router();
const userController = require('../controllers/userController');

var isLogin = function (req, res, next) {
    console.log(req.session);
    if(req.session.email) {
        next();
    } else {
        res.redirect('/');
    }
}

routesUser.get('/dashboard', isLogin, userController.getHobbiesCategory);
routesUser.post('/dashboard', isLogin, userController.addHobbies);
routesUser.get('/logout', userController.logOut)

module.exports = routesUser;