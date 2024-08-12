const express = require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const expressSession = require('express-session')

const BlogPost = require('./models/blogpost.js')
const User = require('./models/user.js');

const app = new express()

const authmiddleware = require('./controller/authmiddleware')
const redirectifauth = require('./controller/redirectIfAuth') 
const {registerUser} = require("./controller/registerUser.js") 

// mongoose.connect("mongodb://localhost:27017/blog-cyber", {useNewUrlParser: true});
mongoose.connect("mongodb+srv://yosephhabtamu5:YTEvb2a4QZTe6CYy@rant.1vobtet.mongodb.net/?retryWrites=true&w=majority&appName=rant", {useNewUrlParser: true});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(expressSession({
    secret: 'blogiverse is cool'}))

global.loggedIn = null;
global.userName = null;
global.userId = Math.floor(1000 + Math.random() * 9000);
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

const aboutController = require('./controller/about')
app.get('/about', aboutController)
const commentcontroller = require('./controller/postcomment')
app.post('/comment/:id', commentcontroller)

const {getpostscreen, storepost, getonepost}= require('./controller/post')
app.get('/post/new',authmiddleware, getpostscreen)
app.get('/post/:id',getonepost)
app.post('/post/new', authmiddleware,storepost )

// user registration
app.get('/auth/register', async (req,res)=>{
    if(req.session.userId){
        return res.redirect('/') // if user logged in, redirect to home page
        }
    await res.render('register')
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