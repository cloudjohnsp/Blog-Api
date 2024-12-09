import express, { Router } from 'express';
import BlogController from '../Controllers/BlogController.controller';

const blogRouter: Router = express.Router();

const blogController = new BlogController();

blogRouter.post('/create', blogController.createBlogPost);

export default blogRouter;
