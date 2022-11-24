const blogpost = require('../models/blogpost')

module.exports =  async (req,res)=>{
    const blogposts = await blogpost.find({})
    await res.render('index',{
        blogposts, userName:userPayload?.userName
    })
    }