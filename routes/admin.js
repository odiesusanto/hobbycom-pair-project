const routesAdmin = require('express').Router();
const adminController = require('../controllers/adminController');

var isLogin = function (req, res, next) {
    console.log(req.session);
    if(req.session.email) {
        next();
    } else {
        res.redirect('/');
    }
}

routesAdmin.get('/dashboard-admin', isLogin, adminController.adminPage);
routesAdmin.get('/hobbiescontrol', isLogin, adminController.getDataHobbies);

routesAdmin.get('/hobbiescontrol/add', isLogin, adminController.getHobbyDataToAdd);
routesAdmin.post('/hobbiescontrol/add', isLogin, adminController.addHobby);

routesAdmin.get('/hobbiescontrol/edit/:id', isLogin, adminController.getHobby);
routesAdmin.post('/hobbiescontrol/edit/:id', isLogin, adminController.updateHobby);

routesAdmin.get('/hobbiescontrol/delete/:id', isLogin, adminController.deleteHobby);

routesAdmin.get('/eventscontrol', isLogin, adminController.getEventsData);

routesAdmin.get('/eventscontrol/add', isLogin, adminController.getEventDataToAdd);
routesAdmin.post('/eventscontrol/add', isLogin, adminController.addEvent);

routesAdmin.get('/eventscontrol/edit/:id', isLogin, adminController.getEvent);
routesAdmin.post('/eventscontrol/edit/:id', isLogin, adminController.updateEvent);

routesAdmin.get('/eventscontrol/delete/:id', isLogin, adminController.deleteEvent);

routesAdmin.get('/logout', adminController.logOut);

module.exports = routesAdmin;
