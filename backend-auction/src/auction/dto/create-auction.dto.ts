import { IsString, IsNumber, IsDate } from 'class-validator';

export class CreateAuctionDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  startingPrice: number;

  @IsDate()
  endTime: Date;

}