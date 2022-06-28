const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    username:{
     type: String,
    required: true},
    id : String,
    message:String,

})

const comment = mongoose.model('comment',commentSchema);
module.exports = comment