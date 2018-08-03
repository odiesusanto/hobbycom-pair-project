const express = require('express');
const app = express();
const session = require('express-session');
const routes = require('./routes/index');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.locals.formatDate = require('./helpers/datehelper');
app.locals.dateTime = require('./helpers/dateTimeHelper')

app.use(session({
    secret: 'hxexlxlxo',
    resave: true,
    saveUninitialized: true
}));

app.use(routes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server starts on ${port}`);
});