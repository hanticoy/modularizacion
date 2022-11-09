
const mongoose = require('../config/mongoose.config')

const PostSchema = new mongoose.Schema(
    {
        title: { type: String, required: [true, "Posts must have a title"] },
        content: { type: String, required: [true, "Posts must have content"] },
    }, { timestamps: true })

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: [true, "Blogs must have a title"], minlength: [3, "Titles must have at least 3 characters"] },
    posts: [PostSchema]
}, { timestamps: true })

const UserSchema = new mongoose.Schema({
    name: { type: String, required: [true, "A first name is required"] },
    blogs: [BlogSchema]
}, { timestamps: true })

 // crea un objeto que contenga métodos para que Mongoose interactúe con MongoDB
 const Post = mongoose.model('post', PostSchema);
 const Blog = mongoose.model('blog', BlogSchema);
 const Usuario = mongoose.model('usuario', UserSchema);

module.exports= {Post,Blog,Usuario}