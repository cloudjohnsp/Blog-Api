import { NotFoundError } from 'restify-errors';
import Blog from '../../../Domain/Models/Blog';
import UpdateBlogPostTagsRequest from '../../Contracts/Dtos/Blog/UpdateBlogPostTagsRequest.dto';
import BlogPostResponse from '../../Contracts/Dtos/Blog/BlogPostResponse.dto';

class UpdateTagsUseCase {
  static async execute(
    request: UpdateBlogPostTagsRequest
  ): Promise<BlogPostResponse> {
    const { id, tags } = request;

    const foundBlogPost = await Blog.findById(id);

    if (!foundBlogPost) {
      throw new NotFoundError('BlogPost not found!');
    } else {
      foundBlogPost.tags.push(...tags);
      foundBlogPost.updatedAt = new Date();
      await foundBlogPost.save();
    }

    const response = await Blog.findById(id).lean();
    return {
      ...response,
    };
  }
}

export default UpdateTagsUseCase;
