const blogpost= require('../models/blogpost')
// const username = require('../index')
module.exports = async (req,res)=>{
    const post = req.body
    console.log(req.body)
    await blogpost.create({
        username: username ,
        title : post.title,
        body : post.body,
        subtitle : post.subtitle,
        date : Date.now()
    },(error,blogpost) =>{
        console.log(blogpost)
        console.error(error)
        res.redirect('/')
        })
console.log('----------------------------------------------', username)
      
        }