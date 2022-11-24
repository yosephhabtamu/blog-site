const user = require('../models/userInfo')
const axios = require('axios')



module.exports = async (req,res)=>{
    try {
        const newuser = req.body
        
        const user = await axios.post('http://localhost:5000/api/users/signup/', newuser)
        
       console.log(user)
        req.session.userId = user.data.id
        req.session.userPayload = req.body
        res.redirect('/aboutForm')
    
        
    } catch (error) {
        console.log(error.response.data)
        const errors = error.response.data.errors
        req.session.userPayload = req.body
     
        req.session.errors = errors
        await res.redirect('/auth/register')
        console.log(error)
        
    }
   
   
  
    

      
        }