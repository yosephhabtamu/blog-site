const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
title: String,
username:{
    type:String,
    unique: true,
    required:true
},
subtitle: String, 
date: Date,
body: String,
image: String,
comments:[String]


});
const BlogPost = mongoose.model('BlogPost',BlogPostSchema);
module.exports = BlogPost