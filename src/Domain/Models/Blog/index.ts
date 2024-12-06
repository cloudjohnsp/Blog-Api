import { model } from 'mongoose';
import BlogPostSchema from '../../Schemas/Blog';

const Blog = model('Blog', BlogPostSchema);

export default Blog;
