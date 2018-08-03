const models = require('../models');
const Hobby = models.Hobby;
const Event = models.Event;
const Community = models.Community;
const dateHelper = require('../helpers/datehelper');

module.exports = {

    getEventsForHobbies: (req, res) => {
        Hobby.findById(req.params.id, {
            include: [models.Event]
        })
            .then(data => {
                // res.json(data);
                res.render('./hobbies/hobbies', {
                    data: data,
                    dateHelper: dateHelper,
                    error: null
                });
            })
            .catch(err => {
                res.render('./hobbies/hobbies', { error: err.message });
            })
    },
    getEvents: (req, res) => {
        Event.findAll({
            order: [['id', 'ASC']],
            include: [models.Hobby],
            where: { HobbyId: req.params.id }
        })
            .then(event => {
                res.render('./hobbies/hobbies', { event: event });
            })
            .catch(err => {
                re.send(err)
            })
    },

    joinEvents: (req, res) => {
        Event.findOne({
            include: [models.Hobby],
            where: { HobbyId: req.params.id }
        })
            .then(event => {
                if (event.attendance >= event.quota) {
                    res.redirect('/dashboard')
                } else {
                    // res.json(event)
                    Event.update({
                        attendance: event.attendance += 1,
                    }, { where: { id: event.id } })
                        // res.json(event)
                        .then(() => {
                            Community.create({
                                UserId: req.session.UserId,
                                HobbyId: req.params.id,
                                EventId: req.params.idEvent,
                                joinStatus: true
                            })
                                .then(() => {
                                    res.redirect('/dashboard')
                                })
                                .catch(err => {
                                    res.send(err);
                                })
                        })
                        .catch(err => {
                            res.send(err);
                        })
                }
            })
            .catch(err => {
                res.send(err);
            })
    },

    // getConfirmation: (req, res) => {
    //     res.render('./hobbies/confirmation');
    // }


}