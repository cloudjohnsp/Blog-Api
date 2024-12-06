import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const blogPostSchema = new Schema({
  title: String,
  slug: String,
  published: Boolean,
  author: String,
  content: String,
  tags: [String],
  createdAt: Date,
  updatedAt: Date,
  comments: [
    {
      user: String,
      content: String,
      votes: Number,
    },
  ],
});

const BlogPost = model('Blog', blogPostSchema);
export default BlogPost;