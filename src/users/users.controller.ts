import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post()
  async createUser(
    @Body()
    createUserDto: CreateUserDto,
  ) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  async getUserById(
    @Param('id')
    id: string,
  ) {
    return this.usersService.getUserById(id);
  }

  @Delete(':id')
  async deleteUser(
    @Param('id')
    id: string,
  ) {
    return this.usersService.deleteUser(id);
  }

  @Patch(':id')
  async updateUser(
    @Param('id')
    id: string,
    @Body()
    UpdateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, UpdateUserDto);
  }
}
