const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
const UserSchema = new Schema({
username:{
    type:String,
    required: true,
    unique: true
},
password: {}, 
email: {},
});

UserSchema.pre('save', function(next){
    const user = this
    bcrypt.hash(user.password, 10, (error, hash) => {
    user.password = hash
    next()
    })
    })
const User = mongoose.model('user',UserSchema);

module.exports = User