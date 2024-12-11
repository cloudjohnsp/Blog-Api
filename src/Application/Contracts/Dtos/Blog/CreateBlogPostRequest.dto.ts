import BlogPost from './BlogPost.dto';

type CreateBlogPostRequestDto = Pick<BlogPost, 'title' | 'content' | 'tags'>;

export default CreateBlogPostRequestDto;
