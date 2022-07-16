const user = require('../models/user')
const path = require('path')

async function registrationPage (req,res){
    if(req.session.userId){
        return res.redirect('/') // if user logged in, redirect to home page
        }
    await res.render('register',{username})
    }
async function registerUser (req,res){
    console.log(req.files)
    if (req.files != null) {
        
        let image = req.files.image
        console.log(req.body)        
        const newuser = req.body
    image.mv(path.resolve(__dirname, '../public/profilePic/', image.name),
    async function (error){
        await user.create({
            username: newuser.username,
            email : newuser.email,
            password : newuser.password,
            image: `/profilePic/${image.name}`,

        },(error) =>{
            if(error){
                console.error(error)
                return res.redirect('/auth/register')

                }
            res.redirect('/auth/login')
            }) 

    } )}
       
        } 

module.exports = {registrationPage, registerUser}