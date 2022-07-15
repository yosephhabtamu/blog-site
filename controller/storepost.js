const blogpost= require('../models/blogpost')
const path = require('path')

module.exports = async (req,res)=>{
    let image = req.files.image
    const post = req.body
    console.log('//////////////////////////')
    console.log(req.body)
    console.log('.......................................')
    console.log(image.name)
    image.mv(path.resolve(__dirname,'../public/img',image.name),async function
(error){
    await blogpost.create({
        username: username ,
        title : post.title,
        body : post.body,
        subtitle : post.subtitle,
        date : Date.now(),
        image: `/img/${image.name}`
    },(error,blogpost) =>{
        console.log(blogpost)
        console.error(error)
        res.redirect('/')
        })
        console.error(error)
    })
    console.log('----------------------------------------------', username)
        }