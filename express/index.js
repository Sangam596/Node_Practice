require('dotenv').config();//get .env properties into process.env
const debug = require('debug')('app:startup');
// const dbDebugger = require('debug')('app:db');
const config = require('config');
const logger = require('./middleware/logger');//custom middleware
const authenticator = require('./middleware/aunthenticate');//custom middleware
const Joi = require('joi');//format validation
const express = require('express');
const helmet = require('helmet');//3rd party middleware
const morgan = require('morgan');//for logging http request, status and time taken
const app = express();//create express app
const courses = require('./routes/courses');
const home = require('./routes/home');
const genres = require('./routes/genres');


//express built in middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); //if you want to get read me file you can access it with http://localhost:3009/readme.txt

//express custom middlewares
app.use(logger);
app.use(authenticator);

//custom modules
app.use('/api/courses',courses);
app.use('/api/home',home);
app.use('/api/genres',genres);



app.set('view engine', 'pug');//setting up templating engine 
// app.set('views', './views')//optional to override the path of template. it is default value we don't have to set it

console.log(`Application Name ${config.get('name')}`);//based on the NODE_ENV value it fetch info from respective config json file or else from default.json file
console.log(`Mail Server ${config.get('mail.host')}`);//based on the NODE_ENV value it fetch info from respective config json file or else from default.json file
console.log(`Mail Password `, config.get('mail.password'));//based on the NODE_ENV value it fetch info from respective config json file if it is not present there it looks for cutom-environment-variables.json file mapping property 
const port = process.env.PORT || 3010;
console.log(`NODE_ENV : ${process.env.NODE_ENV}`);//if process.env.NODE_ENV 

console.log(`app : ${app.get('env')}`);//if process.env.NODE_ENV is not there or undefined it returns development 


//3rd party middlewares to secure http
app.use(helmet());
app.use(morgan('tiny'));


if (app.get('env') === 'development') {
	app.use(morgan('tiny'));
	// console.log(`Morgon enabled.....`);
	debug('Morgon Enabled....');
}

//Db work
// dbDebugger(`Database connected to DB`);


app.get('/', (req, res) => {
	// res.send('Hello Express');
	res.render('index', { title: `This Is Pug`, message: 'Hello You did it' });
})



app.listen(port, () => console.log(`App is listening on... http://localhost:${port}`));