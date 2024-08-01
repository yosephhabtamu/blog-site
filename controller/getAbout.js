const User = require("../models/user");  
module.exports = async (req,res)=>{
    const user = await User.findOne({userName})
    res.render('about',{about:user.description, userName})
}