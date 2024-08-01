
module.exports = async (req,res)=>{
        if(!userName) res.render('forbidden');
        else
        await res.render('about', {userName})
        }