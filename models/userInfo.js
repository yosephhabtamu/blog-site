const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
const UserSchema = new Schema({
userName:{
    type:String,
    required: true,
    unique: true
},

about:String

});

const User = mongoose.model('user',UserSchema);

module.exports = User