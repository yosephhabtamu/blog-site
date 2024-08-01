const User = require('../models/user')
const bcrypt = require('bcrypt')

module.exports = async  (req, res) =>{
   
User.findOne({userName}, (error,user) => {
    if (user){
    bcrypt.compare(password, user.password, (error, same) =>{
    if(same){ 
    req.session.userId = user._id
    req.session.username = user.username
    res.redirect('/')
    }
    else{
        res.redirect('/auth/login')
    }})
}
else{
    console.error(error)
    res.redirect('/auth/login')
}
})
}
