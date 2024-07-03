import { Body, Controller, Post, Req } from '@nestjs/common';
import { CreatePostDto } from './dto/CreatePost.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post()
  async createPost(
    @Body()
    createPost: CreatePostDto,
  ) {
    return await this.postsService.createPost(createPost);
  }
}
