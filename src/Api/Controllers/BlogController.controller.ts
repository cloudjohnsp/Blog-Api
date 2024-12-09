import { NextFunction, Request, Response } from 'express';
import CreatePostUseCase from '../../Application/UseCases/Blog/CreatePostUseCase';

class BlogController {
  async createBlogPost(req: Request, res: Response, _next: NextFunction) {
    const { title, slug, content, tags } = req.body;
    const newPost = { title, slug, content, tags };
    const data = await CreatePostUseCase.execute(newPost);

    res.status(201).json(data);
  }
}

export default BlogController;
