const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
title: String,
username:{
    type:String,
    required:true
},
subtitle: String, 
date: Date,
body: String,
image:{
    type:String,
    default:'/img/default.png'
},
comments:[String]


});
const BlogPost = mongoose.model('BlogPost',BlogPostSchema);
module.exports = BlogPost