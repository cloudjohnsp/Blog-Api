import { NextFunction, Request, Response } from 'express';
import CreatePostUseCase from '../../Application/UseCases/Blog/CreatePostUseCase';
import FindByTitleUseCase from '../../Application/UseCases/Blog/FindByTitleUseCase';

class BlogController {
  async createBlogPost(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { title, slug, content, tags } = req.body;
      const newPost = { title, slug, content, tags };
      const data = await CreatePostUseCase.execute(newPost);

      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  }

  async findByProperty(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { property, value } = req.params;
      const data = await FindByTitleUseCase.execute({ property, value });

      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
}

export default BlogController;
