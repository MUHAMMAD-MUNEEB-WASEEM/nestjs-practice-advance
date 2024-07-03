import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { Post, postSchema } from 'src/schemas/Post.schema';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { User, userSchema } from 'src/schemas/User.schema';
Post;

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Post.name, schema: postSchema },
      { name: User.name, schema: userSchema },
    ]),
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
