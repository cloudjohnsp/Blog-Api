import { Types } from 'mongoose';

interface BlogPostResponse {
  id?: Types.ObjectId;
  title?: string;
  slug?: string;
  content?: string;
  tags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
  upVotes?: number;
  downVotes?: number;
  comments?: [
    {
      user: string;
      content: string;
      votes: number;
    }
  ];
}

export default BlogPostResponse;
