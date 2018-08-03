const models = require('../models');
const User = models.User;
const Hobby = models.Hobby;
const Community = models.Community;
const bcrypt = require('bcrypt');

module.exports = {

    getFormRegister: (req, res) => {
        User.findAll({
            order: [['id', 'ASC']]
        })
            .then(users => {
                res.render('register', { title: `Registration Form`, users: users, error: null });
            })
            .catch(err => {
                res.render('register', { title: `Registration Form`, users: users, error: err.message });
            })
    },

    addUsers: (req, res) => {
        User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password
        })
            .then(() => {
                res.redirect('/login');
            })
            .catch(err => {
                // res.json(err);
                res.render('register', { title: `Registration Form`, error: err.message });
            })
    },

    getLoginForm: (req, res) => {
        res.render('login', { title: `Login` });
    },

    userLogin: (req, res) => {
        User.findOne({
            where: { email: req.body.email }
        })
            .then(user => {
                bcrypt.compare(req.body.password, user.password, function (err, data) {
                    // console.log(req.body.password, user.password);
                    // console.log(data)
                    if (data == false) {
                        res.redirect('/');
                    } else {
                        if (user.role !== 'user') {
                            req.session.UserId = user.id
                            req.session.email = user.email;
                            console.log(req.session)
                            res.redirect('/dashboard-admin')
                        } else {
                            req.session.UserId = user.id
                            req.session.email = user.email;
                            console.log(req.session)
                            res.redirect('/dashboard')
                        }
                    }
                });
            })
            .catch(err => {
                res.send(err);
            })
    },

    getHobbiesCategory: (req, res) => {
        User.findOne({
            where: { email: req.session.email },
            include: [models.Hobby]
        })
            .then(hobbiesData => {
                Hobby.findAll()
                    .then(hobbies => {
                        res.render('./users/dashboard', {hobbiesData: hobbiesData, hobbies: hobbies, error: null });
                    })
            })
            .catch(err => {
                res.render('./users/dashboard', {error: err.message })
            })
    },

    addHobbies: (req, res) => {
        Community.create({
            UserId: req.session.UserId,
            HobbyId: req.body.HobbyId
        })
            .then(() => {
                res.redirect('/dashboard');
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