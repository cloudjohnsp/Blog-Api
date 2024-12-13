import BlogPostResponse from '../../../src/Application/Contracts/Dtos/Blog/BlogPostResponse.dto';
import CreateBlogPostRequestDto from '../../../src/Application/Contracts/Dtos/Blog/CreateBlogPostRequest.dto';
import CreatePostUseCase from '../../../src/Application/UseCases/Blog/CreatePostUseCase';
import Blog from '../../../src/Domain/Models/Blog';

jest.mock('../../../src/Domain/Models/Blog');

describe('Create Blog Post Use Case', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should create and save a blog post successfully', async () => {
    // Arrange
    const request: CreateBlogPostRequestDto = {
      title: 'Testing Mongoose with Jest',
      content: 'This is a test blog post.',
      tags: ['test', 'mock'],
    };

    const mockedBlogPost: BlogPostResponse = {
      title: 'Testing Mongoose with Jest',
      content: 'This is a test blog post.',
      tags: ['test', 'mock'],
      slug: 'Testing Mongoose with Jest',
      upVotes: 0,
      downVotes: 0,
      createdAt: new Date(),
    };

    (Blog.create as jest.Mock).mockResolvedValue(mockedBlogPost);

    // Act
    const response = await CreatePostUseCase.execute(request);

    // Assert
    expect(Blog.create).toHaveBeenCalledWith({
      ...request,
      slug: request.title,
      upVotes: 0,
      downVotes: 0,
    });

    expect(response).toEqual({
      title: mockedBlogPost.title,
      slug: mockedBlogPost.title,
      content: mockedBlogPost.content,
      tags: mockedBlogPost.tags,
      createdAt: mockedBlogPost.createdAt,
    });
  });
});
