import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  full_name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  phone_number: string;

  type_of_school?: string;

  state_name?: string;
}

export class UpdateUserDto {
  full_name: string;
  email?: string;
  phone_number?: string;
  type_of_school?: string;
  state_name?: string;
}
