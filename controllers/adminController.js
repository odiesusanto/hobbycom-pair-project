const models = require('../models');
const Hobby = models.Hobby;
const Event = models.Event;

module.exports = {

    adminPage: (req, res) => {
        res.render('./admin/dashboard-admin', {title: `Welcome, admin!`});
    },

    getDataHobbies: (req, res) => {
        Hobby.findAll({
            order: [['category', 'ASC']]
        })
        .then(hobbyData => {
            Event.findAll()
            .then(eventData => {
                // res.json(eventData)
                res.render('./admin/hobbiescontrol', {title: `Hobbies Control`, hobbyData: hobbyData, eventData: eventData, error: null});
            })
            .catch(err => {
                res.render('./admin/hobbiescontrol', {title: `Hobbies Control`, hobbyData: [], eventData: [], error: err.message});
            })
        })
        .catch(err => {
            res.send(err);
        })
    }, 

    getHobbyDataToAdd: (req, res) => {
        Hobby.findAll()
        .then(hobbyData => {
            res.render('./admin/hobbiesadd', {title: `Add Hobby`, hobbyData: hobbyData, error: null})
        })
        .catch(err => {
            res.render('./admin/hobbiesadd', {title: `Add Hobby`, hobbyData: [], eventData: [], error: err.message});
        })
    },

    addHobby: (req, res) => {
        Hobby.create({
            hobby_name: req.body.hobby_name,
            category: req.body.category
        })
        .then(() => {
            res.redirect('/hobbiescontrol')
        })
        .catch(err => {
            res.render('./admin/hobbiesadd', {title: `Welcome, admin!`, hobbyData: [], eventData: [], error: err.message});
        })
    }, 

    getHobby: (req, res) => {
        Hobby.findById(req.params.id)
        .then(editHobby => {
            res.render('./admin/hobbiesedit', {title: `Edit Hobby`, editHobby: editHobby, error: null});
        })
        .catch(err => {
            res.render('./admin/hobbiesedit', {title: `Edit Hobby`, editHobby: editHobby, error: err.message});
        })
    }, 

    updateHobby: (req, res) => {
        Hobby.update({
            hobby_name: req.body.hobby_name,
            category: req.body.category
        }, {where: {id: req.params.id}
    })
    .then(() => {
        res.redirect('/hobbiescontrol');
    })
    .catch(err => {
        let editHobby = {
            hobby_name: req.body.hobby_name,
            category: req.body.category
        }
        res.render('./admin/hobbiesedit', {title: `Edit Hobby`, editHobby: editHobby, error: err.message});
    })
    }, 

    deleteHobby: (req, res) => {
        Hobby.destroy({where: {id: req.params.id}})
        .then(() => {
            res.redirect('/hobbiescontrol');
        })
        .catch(err => {
            res.send(err);
        })
    },

    getEventsData: (req, res) => {
        Event.findAll({
            order: [['id', 'ASC']]
        })
        .then(eventData => {
                res.render('./admin/eventscontrol', {title: `Events Control`, eventData: eventData, error: null});
        })
        .catch(err => {
            res.render('./admin/eventscontrol', {title: `Events Control`, eventData: eventData, error: err.message});
        })
    },

    getEventDataToAdd: (req, res) => {
        Event.findAll()
        .then(eventData => {
            Hobby.findAll()
            .then(hobbyData => {
                // res.json(hobbyData)
                res.render('./admin/eventsadd', {title: `Add Event`, eventData: eventData, hobbyData: hobbyData, error: null})
            })
            
        })
        .catch(err => {
            res.render('./admin/eventsadd', {title: `Add Event`, eventData: [], error: err.message});
        })
    },

    addEvent: (req, res) => {
        Event.create({
            event_name: req.body.hobby_name,
            quota: req.body.quota,
            schedule: req.body.schedule,
            HobbyId: req.body.HobbyId
        })
        .then(() => {
            res.redirect('/eventscontrol')
        })
        .catch(err => {
            res.render('./admin/eventsadd', {title: `Welcome, admin!`, eventData: [], error: err.message});
        })
    }, 

    getEvent: (req, res) => {
        Event.findById(req.params.id)
        .then(editEvent => {
            res.render('./admin/eventsedit', {title: `Edit Event`, editEvent: editEvent, error: null});
        })
        .catch(err => {
            res.render('./admin/eventsedit', {title: `Edit Event`, editEvent: editEvent, error: err.message});
        })
    }, 

    updateEvent: (req, res) => {
        Event.update({
            event_name: req.body.event_name,
            quota: req.body.quota,
            schedule: req.body.schedule
        }, {where: {id: req.params.id}
    })
    .then(() => {
        res.redirect('/eventscontrol');
    })
    .catch(err => {
        let editEvent = {
            event_name: req.body.event_name,
            quota: req.body.quota,
            schedule: req.body.schedule
        }
        res.render('./admin/eventsedit', {title: `Edit Event`, editEvent: editEvent, error: err.message});
    })
    }, 

    deleteEvent: (req, res) => {
        Event.destroy({where: {id: req.params.id}})
        .then(() => {
            res.redirect('/eventscontrol');
        })
        .catch(err => {
            res.send(err);
        })
    }, 

    logOut: (req,res) => {
        req.session.destroy()
        res.redirect('/')
    }


}