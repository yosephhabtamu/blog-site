module.exports = async (req,res)=>{
    await res.render('contact', {userName:userPayload?.userName})
}