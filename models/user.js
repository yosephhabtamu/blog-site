const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
const UserSchema = new Schema({
userName:{
    type:String,
    required: true,
    unique: true
},
password: String,
email: String,
description:String

});

UserSchema.pre('save', function(next){
    const user = this
    bcrypt.hash(user.password, 10, (error, hash) => {
    if(error) throw new Error(error.message);
    user.password = hash
    next()
    })
    })
const User = mongoose.model('user',UserSchema);

module.exports = User