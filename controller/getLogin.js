const user = require('../models/userInfo')

module.exports = async (req,res)=>{
    await res.render('login',{user})
    }