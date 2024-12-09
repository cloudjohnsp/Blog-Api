import { model } from 'mongoose';
import BlogPostSchema from '../../Schemas/Blog';
import IBlog from '../../../Application/Interfaces/Blog';

const Blog = model<IBlog>('Blog', BlogPostSchema);

export default Blog;
