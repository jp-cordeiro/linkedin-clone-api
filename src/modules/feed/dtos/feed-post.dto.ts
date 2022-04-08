import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFeedPost {
  @IsNotEmpty()
  @IsString()
  body: string;
}

export class UpdateFeedPost {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  body: string;
}
