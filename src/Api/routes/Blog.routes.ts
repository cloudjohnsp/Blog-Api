import express, { NextFunction, Request, Response, Router } from 'express';
import BlogController from '../Controllers/BlogController.controller';
import BlogValidator from '../../Application/Validators/blog.validator';

const blogRouter: Router = express.Router();

const blogController = new BlogController();

blogRouter
  .post(
    '/create',
    BlogValidator.createValidation,
    blogController.createBlogPost
  )
  .get(
    '/find-by-title/:title',
    BlogValidator.findByTitleValidation,
    blogController.findByTitle
  );

export default blogRouter;
