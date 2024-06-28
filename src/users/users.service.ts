import {
  BadRequestException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { User } from 'src/schemas/User.schema';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userModel.create(createUserDto);

    return newUser;
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const isValidId = mongoose.Types.ObjectId.isValid(id);

    if (!isValidId) {
      throw new BadRequestException('Please enter correct id');
    }
    const updateUser = this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
      runValidators: true,
    });

    console.log('new usewr', updateUser);

    if (!updateUser) {
      throw new HttpException('User not found!', 404);
    }

    return updateUser;
  }

  async getAllUsers() {
    const newUser = this.userModel.find();
    return newUser;
  }

  async getUserById(id: string): Promise<User> {
    const isValidId = mongoose.Types.ObjectId.isValid(id);

    if (!isValidId) {
      throw new BadRequestException('Please enter correct id');
    }
    const getUser = await this.userModel.findById(id).exec();
    if (!getUser) {
      throw new NotFoundException('User not found');
    }
    return getUser;
  }

  async deleteUser(id: string): Promise<User> {
    const isValidId = mongoose.Types.ObjectId.isValid(id);

    if (!isValidId) {
      throw new BadRequestException('Please enter correct id');
    }
    return this.userModel.findByIdAndDelete(id);
  }
}
