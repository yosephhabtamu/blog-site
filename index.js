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

const authmiddleware = require('./controller/authmiddleware')
const redirectifauth = require('./controller/redirectIfAuth') 
const {registerUser} = require("./controller/registerUser.js") 

mongoose.connect('mongodb://localhost/blog_cyber', {useNewUrlParser: true});

app.use(fileUpload())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(expressSession({
    secret: 'blogiverse is cool'}))

global.loggedIn = null;
global.userName = null;
app.use("*", (req, res, next) => {
    loggedIn = req.session.isLoggedIn;
    userName = req.session.userName
    next()
    });
app.use(express.static('public'))
// app.use(redirectifauth);
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
app.get('/about', aboutController)
const commentcontroller = require('./controller/postcomment')
app.post('/comment/:id',authmiddleware, commentcontroller)

const {getpostscreen, storepost, getonepost}= require('./controller/post')
app.get('/post/new',authmiddleware, getpostscreen)
app.get('/post/:id',getonepost)
app.post('/post/new', authmiddleware,storepost )

// user registration
app.get('/auth/register', async (req,res)=>{
    if(req.session.userId){
        return res.redirect('/') // if user logged in, redirect to home page
        }
    await res.render('register',{user})
    })

const {getlogin, loginuser} = require('./controller/loginuser')
const {logout} = require("./controller/logout.js")
app.get('/auth/login', getlogin)
app.post('/auth/login',loginuser)
app.get('/auth/logout', logout);

app.post('/auth/register', registerUser)
app.use((req, res) => res.render('notfound'))
app.listen(4000, ()=>{
console.log('App listening on port 4000')
})