const express = require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const expressSession = require('express-session')
const fileUpload = require('express-fileupload')

const BlogPost = require('./models/blogpost.js')
const user = require('./models/user.js')

const app = new express()


mongoose.connect('mongodb://localhost/blog_cyber', {useNewUrlParser: true});

app.use(fileUpload())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(expressSession({
    secret: 'cyber assignment'}))

global.loggedIn = null
global.username = null
global.userImage = null 
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId
    username = req.session.username
    profilePic = req.session.userImage
    console.log(username)
    console.log('------------------------------'+profilePic)
    next()
    });
app.use(express.static('public'))
app.set('view engine','ejs')

const homeController = require('./controller/home')
app.get('/',homeController)
const contactController = require('./controller/contact')
app.get('/contact', contactController)
const aboutController = require('./controller/about')
app.get('/about', aboutController)
const newpostController= require('./controller/post')
app.get('/post/new', newpostController)
const commentcontroller = require('./controller/postcomment')
app.post('/comment/:id', commentcontroller)
const onePostController = require('./controller/onePost')
app.get('/post/:id',onePostController)

// app.get('/comment',(req,res)=>{
//         res.render('comment')
//     })

const createPostController = require('./controller/storepost')
app.post('/post/new',createPostController )

// user registration
const {registerUser, registrationPage} = require('./controller/register')
app.get('/auth/register',registrationPage)
app.post('/auth/register', registerUser)


app.get('/auth/login', async (req,res)=>{
        await res.render('login',{user})
        })
app.post('/auth/login',async  (req, res) =>{
    const { username, password } = req.body;
    user.findOne({username:username}, (error,user) => {
    if (user){
    bcrypt.compare(password, user.password, (error, same) =>{
    if(same){ 
    req.session.userId = user._id
    req.session.username = user.username
    req.session.userImage = user.image
    console.log('username at login', user.username)
    console.log('user image at login',user.image)
    res.redirect('/')
    }
    else{
    res.redirect('/auth/login')
    }})
}
else{
res.redirect('/auth/login')
}
})})


app.listen(4000, ()=>{
console.log('App listening on port 4000')
})