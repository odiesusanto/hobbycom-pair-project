const routes = require('express').Router();
const routesUser = require('./users');
const userController = require('../controllers/userController');
const routesHobby = require('../routes/hobbies');
const routesAdmin = require('../routes/admin');

routes.get('/', (req, res) => {
    res.render('homepage', {title: `Welcome to HOBBYCOM`});
})

routes.get('/register', userController.getFormRegister);
routes.post('/register', userController.addUsers);

routes.get('/login', userController.getLoginForm);
routes.post('/login', userController.userLogin);


routes.use(routesUser);
routes.use(routesHobby);
routes.use(routesAdmin);

module.exports = routes;