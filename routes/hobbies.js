const routesHobby = require('express').Router();
const hobbyController = require('../controllers/hobbyControllers');

routesHobby.get('/hobby/:id/', hobbyController.getEventsForHobbies);

routesHobby.get('/hobby/:id/event/:idEvent', hobbyController.getEvents);
routesHobby.post('/hobby/:id/event/:idEvent', hobbyController.joinEvents);

// routesHobby.get('/hobby/confirmation', hobbyController.getConfirmation);


module.exports = routesHobby;