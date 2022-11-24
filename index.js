const express = require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const expressSession = require('express-session')
const {body, CustomValidator, validationResult} = require('express-validator')
const fileUpload = require('express-fileupload')

const BlogPost = require('./models/blogpost.js')
const user = require('./models/userInfo.js')

const app = new express()


mongoose.connect('mongodb://localhost/blog_cyber', {useNewUrlParser: true});

app.use(fileUpload())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(expressSession({
    secret: 'cyber assignment'}))

global.loggedIn = null

global.errors  = null
global.userPayload = null
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    errors = req.session.errors
    userPayload = {
        userName:req.session.userPayload?.userName,
        email: req.session.userPayload?.email
    }
    console.log('user payload', userPayload)
    next()
    });
app.use(express.static('public'))
app.set('view engine','ejs')

const homeController = require('./controller/home')
app.get('/',homeController)
const contactController = require('./controller/contact')
app.get('/contact', contactController)

const getAbout = require('./controller/getAbout')
app.get('/about', getAbout)


const getAboutForm = require('./controller/getAboutForm')
app.get('/aboutForm', getAboutForm)

const aboutController = require('./controller/about')
app.post('/aboutForm', aboutController)

const newpostController= require('./controller/post')
app.get('/post/new', newpostController)
const commentcontroller = require('./controller/postcomment')
app.post('/comment/:id', commentcontroller)
const onePostController = require('./controller/onePost')
app.get('/post/:id',onePostController)
const createPostController = require('./controller/storepost')
app.post('/post/new',[
    body('title')
    .notEmpty()
    .withMessage('title must be provided'),
    body('subtitle')
    .notEmpty()
    .withMessage('subtitle must be provided'),
    body('body')
    .notEmpty()
    .isLength({min:100})
    .withMessage('body must be not less than 100 character '),

],
createPostController )

// app.get('/comment',(req,res)=>{
//         res.render('comment')
//     })



// user registration
const register = require('./controller/register.js')
const login = require('./controller/login.js')
const getLogin = require('./controller/getLogin.js')
const getRegister = require('./controller/getRegister.js')
app.get('/auth/register',getRegister )
app.get('/auth/login', getLogin)
app.post('/auth/login',login)

app.post('/auth/register', register)
app.listen(4000, ()=>{
console.log('App listening on port 4000')
})