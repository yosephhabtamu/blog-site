const blogpost= require('../models/blogpost')
const path = require('path')
const { validationResult } = require('express-validator')


module.exports = async (req,res)=>{
    const post = req.body
    await blogpost.create({
        username: username ,
        title : post.title,
        body : post.body,
        subtitle : post.subtitle,
        date : Date.now()
    },(error,blogpost) =>{
        console.error(error)
        res.redirect('/')
        })
      
        }