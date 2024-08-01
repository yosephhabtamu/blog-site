const bcrypt = require('bcrypt')
const user = require('../models/user')

async function loginuser(req,res) {
    const { userName, password } = req.body;
    user.findOne({userName}, (error,user) => {
        if(error){
            console.error(error);
            return;
        }
    if (user){
    bcrypt.compare(password, user.password, (error, same) =>{
        if(error){
            console.error(error);
            return;
        }
    if(same){
    req.session.userId = user._id
    req.session.userName = user.userName
    req.session.isLoggedIn = true
    res.redirect('/')
    }
    else{
        console.error("invalid username or Password");
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