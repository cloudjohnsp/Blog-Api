import Blog from '../../../Domain/Models/Blog';
import CreateBlogPostRequestDto from '../../Contracts/Dtos/Blog/CreateBlogPostRequest.dto';
import CreateBlogPostResponseDto from '../../Contracts/Dtos/Blog/CreateBlogPostResponse..dto';

class CreatePostUseCase {
  static async execute(
    request: CreateBlogPostRequestDto
  ): Promise<CreateBlogPostResponseDto> {
    const newBlogPost = await Blog.create({
      ...request,
      slug: request.title,
      upVotes: 0,
      downVotes: 0,
      comments: [],
    });
    const response: CreateBlogPostResponseDto = {
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
