const blogpost= require('../models/blogpost')
const path = require('path')
const { validationResult } = require('express-validator')


module.exports = async (req,res)=>{
    try {
        
        
        const post = req.body
        const result = validationResult(req)
        console.log('this is the result', result.errors)
    console.log(result.errors.length)
    if(result.errors.length !== 0){
        console.log('inhere')
        
        req.session.errors = result.errors
        return res.redirect('/post/new')
    }

    if (req.files){
        let image = req.files?.image
        
        image.mv(path.resolve(__dirname,'../public/img',image.name),async function(error){
                await blogpost.create({
                    username: userPayload.userName,
                    title : post.title,
                    body : post.body,
                    subtitle : post.subtitle,
                    date : Date.now(),
                    image: '/img/' + image.name
                },(error,blogpost) =>{
                    console.error(error)
                    return res.redirect(`/`)
                })
            console.error(error)
            return res.redirect('/')
        })
        
    }
    else{
        // no image provided
        console.log('ingerer')
        await blogpost.create({
            username: userPayload.userName,
            title : post.title,
            body : post.body,
            subtitle : post.subtitle,
            date : Date.now(),
        },(error) =>{
            console.error(error)
            return res.redirect(`/`)
        })
    
    }
} catch (error) {
    return res.redirect('/auth/login')
    
}
}


