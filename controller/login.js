const user = require('../models/userInfo')
const axios = require('axios')
const bcrypt = require('bcrypt')

module.exports = async  (req, res) =>{
    try {
        
    
    const newuser = req.body;
    // console.log(newuser)
    const user = await axios.post('http://localhost:5000/api/users/signin/', newuser)
    console.log('this is user', user.data)
        req.session.userId = user.data.id
        req.session.userPayload = user.data
        res.redirect('/')

//     user.findOne({username:username}, (error,user) => {
//     if (user){
//     bcrypt.compare(password, user.password, (error, same) =>{
//     if(same){ 
//     req.session.userId = user._id
//     req.session.username = user.username
//     res.redirect('/')
//     }
//     else{
//         req.session.user = req.body
//         res.redirect('/auth/login')

//     }})
// }
// else{
// res.redirect('/auth/login')
// }
// })
} catch (error) {
    console.error(error.response?.data)
    res.redirect('/auth/login')
}
}