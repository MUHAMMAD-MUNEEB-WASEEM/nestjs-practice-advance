import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreateUserSettingsDto {
  @IsBoolean()
  @IsOptional()
  receiveNotifications?: boolean;

  @IsBoolean()
  @IsOptional()
  receiveEmails?: boolean;

  @IsBoolean()
  @IsOptional()
  receiveSms?: boolean;
}

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsString()
  @IsOptional()
  displayName?: string;

  @IsString()
  @IsOptional()
  avatarUrl?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateUserSettingsDto)
  settings?: CreateUserSettingsDto;
}
