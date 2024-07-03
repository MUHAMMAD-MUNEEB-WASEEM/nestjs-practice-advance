import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { UserSettings } from './UserSettings.schema';
import { Post } from './Post.schema';

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop({ unique: true, required: true })
  username: string;

  @Prop({ required: false })
  displayName?: string;

  @Prop({ required: false })
  avatarUrl?: string;

  //One to one
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserSettings' })
  settings?: UserSettings;

  //One to many
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Post' })
  posts?: Post[];
}

export const userSchema = SchemaFactory.createForClass(User);
