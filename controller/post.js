const blogPost = require('../models/blogpost')
const comment = require('../models/comment')

async function getpostscreen (req,res){
    await res.render('create', {userName})
 }

async function getonepost(req,res) {
    const id = req.params.id
    const blogpost = await blogPost.findOne({_id:id})
    const comments = await comment.find({id:id})
    await res.render('post', {blogpost,userName, id, comments
    })
    
}

async function storepost (req,res){
    const post = req.body
    console.log(post);
    await blogPost.create({
        username: userName ,
        title : post.title,
        body : post.body,
        subtitle : post.subtitle,
        date : Date.now()
    },(error,blogPost) =>{
        console.error(error)
        res.redirect('/')
        })
      
        }

        // TODO : deletepost

module.exports = {getpostscreen, getonepost, storepost}