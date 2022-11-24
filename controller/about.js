const userInfo = require('../models/userInfo')

module.exports = async (req,res)=>{
        const {about} = req.body
        console.log('about from client', about)
        console.log('user payload inside about', userPayload)
       
             const result = await userInfo.create({userName:userPayload.userName, about})
             console.log('result from db',result)
        res.redirect('/')
        
}