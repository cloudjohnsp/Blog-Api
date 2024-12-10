import mongoose from 'mongoose';
import Blog from '../../src/Domain/Models/Blog';

describe('Create BlogPost', () => {
  it('should create and save a blog post successfully', async () => {
    const blogPost = new Blog({
      title: 'Testing Mongoose with Jest',
      content: 'This is a test blog post.',
      tags: ['test', 'mock'],
    });

    const savedBlogPost = await blogPost.save();

    expect(savedBlogPost._id).toBeDefined();
    expect(savedBlogPost.title).toBe('Testing Mongoose with Jest');
    expect(savedBlogPost.content).toBe('This is a test blog post.');
    expect(savedBlogPost.tags).toHaveLength(2);
    expect(savedBlogPost.tags).toContain('test');
    expect(savedBlogPost.tags).toContain('mock');
  });

  it('should not save a blog post without required fields', async () => {
    const blogPost = new Blog({
      tags: ['test', 'mock'],
    });

    let error;
    try {
      await blogPost.save();
    } catch (err) {
      if (err instanceof mongoose.Error.ValidationError) {
        error = err;
      }
    }

    expect(error).toBeDefined();
    expect(error?.errors['title']).toBeDefined();
    expect(error?.errors['content']).toBeDefined();
  });
});
