const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
title: {},
username:{},
subtitle: {}, 
date: Date,
body: String

});
const BlogPost = mongoose.model('BlogPost',BlogPostSchema);
module.exports = BlogPost