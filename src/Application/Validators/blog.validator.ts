import { celebrate, Joi, Segments } from 'celebrate';
import Blog from '../../Domain/Models/Blog';
import { title } from 'process';

class BlogValidator {
  private static readonly CREATE_VALIDATOR = celebrate({
    [Segments.BODY]: Joi.object({
      title: Joi.string().min(2).max(100).required(),
      content: Joi.string().min(2).required(),
      tags: Joi.array<string>(),
    }),
  });

  private static readonly FIND_BY_PROPERTY_VALIDATOR = celebrate({
    [Segments.PARAMS]: Joi.object({
      property: Joi.string().min(1).max(100).required(),
      value: Joi.string().min(1).max(100).required(),
    }),
  });

  private static readonly UPDATE_TITLE_VALIDATOR = celebrate({
    [Segments.BODY]: Joi.object({
      id: Joi.string().min(1).required(),
      title: Joi.string().min(2).max(100).required(),
    }),
  });

  private static readonly UPDATE_TAGS_VALIDATOR = celebrate({
    [Segments.BODY]: Joi.object({
      id: Joi.string().min(1).required(),
      tags: Joi.array<string>(),
    }),
  });

  private static readonly DELETE_POST_VALIDATOR = celebrate({
    [Segments.PARAMS]: Joi.object({
      id: Joi.string().min(1).required(),
    }),
  });

  static get createValidation() {
    return BlogValidator.CREATE_VALIDATOR;
  }

  static get findByPropertyValidation() {
    return BlogValidator.FIND_BY_PROPERTY_VALIDATOR;
  }

  static get updateTitle() {
    return BlogValidator.UPDATE_TITLE_VALIDATOR;
  }

  static get updateTags() {
    return BlogValidator.UPDATE_TAGS_VALIDATOR;
  }

  static get deletePost() {
    return BlogValidator.DELETE_POST_VALIDATOR;
  }
}

export default BlogValidator;
