const userInfo = require('../models/userInfo')

module.exports = async (req,res)=>{
    const about = await userInfo.findOne({userName: userPayload.userName})
    console.log('found about', about)
    res.render('about',{about, userName: userPayload?.userName})
}