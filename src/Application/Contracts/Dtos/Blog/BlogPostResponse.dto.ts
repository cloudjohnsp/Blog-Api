import { Types } from 'mongoose';

interface BlogPostResponse {
  id: Types.ObjectId;
  title: string;
  slug: string;
  content: string;
  tags: string[];
  createdAt: Date;
}

export default BlogPostResponse;
