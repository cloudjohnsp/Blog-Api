import Blog from '../../../Domain/Models/Blog';
import BlogPostResponse from '../../Contracts/Dtos/Blog/BlogPostResponse.dto';
import CreateBlogPostRequestDto from '../../Contracts/Dtos/Blog/CreateBlogPostRequest.dto';

class CreatePostUseCase {
  static async execute(
    request: CreateBlogPostRequestDto
  ): Promise<BlogPostResponse> {
    const newBlogPost = await Blog.create({
      ...request,
      slug: request.title,
      upVotes: 0,
      downVotes: 0,
    });
    const response: BlogPostResponse = {
      id: newBlogPost._id,
      title: newBlogPost.title,
      slug: newBlogPost.title,
      content: newBlogPost.content,
      tags: newBlogPost.tags,
      createdAt: newBlogPost.createdAt,
    };

    return response;
  }
}

export default CreatePostUseCase;
