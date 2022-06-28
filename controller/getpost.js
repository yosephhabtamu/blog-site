
module.exports = async (req,res)=>{
    const blogpost = await blogpost.findById(req.params.id)
res.render('post',{
blogpost,username
})
    }