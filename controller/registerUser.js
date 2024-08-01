const bcrypt = require('bcrypt')
const user = require('../models/user')

async function registerUser (req,res) {
    const newuser = req.body
    await user.create({
        userName: newuser.userName,
        email : newuser.email,
        password : newuser.password,
        description:newuser.description
    },(error,blogpost) =>{
        if(error){
            console.error(error);
            return res.redirect('/auth/register')
            }
        res.redirect('/auth/login')
        })
    }


module.exports = {registerUser}