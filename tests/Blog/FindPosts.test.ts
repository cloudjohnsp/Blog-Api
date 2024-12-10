import Blog from '../../src/Domain/Models/Blog';
import { createPost } from '../Utils/mongo-memory-server';

describe('FindBlogPost', () => {
  beforeAll(async () => {
    await createPost();
  });

  it('Find document by property', async () => {
    const regex = new RegExp('Testing', 'i');
    const retrievedPost = await Blog.find({ title: regex }).lean();

    expect(retrievedPost).toHaveLength(1);
    expect(retrievedPost[0]).toHaveProperty('content');
    expect(retrievedPost[0]).toHaveProperty('tags');
    expect(retrievedPost[0].tags).toHaveLength(2);
  });
});
