module.exports = async (req,res)=>{
    if(!userName) res.render("forbidden")
    await res.render('contact',{userName})
}