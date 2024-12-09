import { Types } from 'mongoose';

interface CreateBlogPostResponseDto {
  id: Types.ObjectId;
  title: string;
  slug: string;
  content: string;
  tags: string[];
  createdAt: Date;
}

export default CreateBlogPostResponseDto;
