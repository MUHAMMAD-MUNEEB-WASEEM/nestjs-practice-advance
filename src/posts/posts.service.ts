import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/CreatePost.dto';
import { Post } from 'src/schemas/Post.schema';
import { User } from 'src/schemas/User.schema';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<Post>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}
  async createPost({ userId, ...createPostDto }: CreatePostDto) {
    const findUser = await this.userModel.findById(userId);

    if (!findUser) {
      throw new NotFoundException('User not found!');
    }
    const savePost = await this.postModel.create(createPostDto);
    await findUser.updateOne({
      $push: {
        posts: savePost._id,
      },
    });
  }
}
