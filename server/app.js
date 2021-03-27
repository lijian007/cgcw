PATH = require('path')


conf = new require('./cgcw_config')()
const { promisify } = require('util')
 FS = require('fs')
fsreaddir = promisify(FS.readdir)
const fsstat = promisify(FS.stat)

const util = require('util')

readFile = util.promisify(FS.readFile)

//const moment = require('moment')
const promise = require('bluebird')
const options = {
    promiseLib: promise,
    query: e => {
        console.log(e.query)
    }
}
const pgp = require('pg-promise')(options)
//const conf = new require('./config')()
db = pgp(conf.pgcs)


const express = require('express')

const favicon = require('serve-favicon')
const logger = require('morgan')



// const cookieParser = require('cookie-parser')
// const bodyParser = require('body-parser')

const index = require('./index')

const session = require('express-session')

const app = express()
// app.set('trust proxy', true);

// uncomment after placing your favicon in /public
app.use(favicon(PATH.join(__dirname, 'public', 'favicon.ico')));

//session data is stored in the server side (redis)
//only session id is saved in the cookie and signed

// app.use(session({
//   store: new pgSession({
//       pool: pgPool // Use global pg-module 
//       // conString: conf.connectionString // Connect using something else than default DATABASE_URL env variable 
//       //        conString: 'postgres://abc:user@localhost:5432/odb'
//   }),
//   secret: conf.SECRET,
//   resave: false,
//   saveUninitialized: false,
//   cookie: { maxAge: ( 3 * 24 * 60 * 60 * 10000) } // 30 days 
// }));


app.use(session({
    secret: conf.SECRET,
    resave: false,
    saveUninitialized:false
}));

// app.use(bodyParser.xml());
app.use(logger('dev'))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(cookieParser())
app.use(express.static(PATH.join(__dirname, 'public')))

app.use(function (req, res, next) {
    let allowedOrigins = ['http://localhost:8081']
    
    let origin = req.headers.origin
    console.log('origin',origin)

    // if (allowedOrigins.indexOf(origin) > -1) {
    //     res.setHeader('Access-Control-Allow-Origin', origin)
    // }
    if (origin) {
        res.setHeader('Access-Control-Allow-Origin', origin)
    }
    //res.setHeader('Access-Control-Allow-Origin', origin)
    
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept')

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true)

    // Pass to next layer of middleware
    next()
})


app.use('/', index)

// catch 404 and forward to error handler



app.use(function (req, res, next) {
    let err = new Error('Not Found')
    err.status = 404
    next(err)
})

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.json({ message: err.message,
        error:err})
})

module.exports = app