import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from './User.schema';

@Schema({
  timestamps: true,
})
export class Post {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  contents: string;

  user: User;
}

export const postSchema = SchemaFactory.createForClass(Post);
