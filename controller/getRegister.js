const user = require('../models/userInfo')

module.exports = async (req,res)=>{
    if(req.session.userId){
        return res.redirect('/') // if user logged in, redirect to home page
        }
    await res.render('register')
    }