const bcrypt = require('bcrypt')
const user = require('../models/user')

async function loginuser(req,res) {
    const { username, password } = req.body;
    user.findOne({userName:username}, (error,user) => {
    if (user){
    bcrypt.compare(password, user.password, (error, same) =>{
    if(same){
    req.session.userId = user._id
    req.session.userName = user.userName
    req.session.isLoggedIn = true
    res.redirect('/')
    }
    else{
        console.error(error);
    res.redirect('/auth/login')
    }})
}
else{
res.redirect('/auth/login')
}
})
}

async function getlogin(req,res) {
    await res.render('login',{user})
}

module.exports = {loginuser, getlogin}