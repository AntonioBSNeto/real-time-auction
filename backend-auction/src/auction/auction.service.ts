import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Auction } from 'src/database/entities/auction.entity';
import { Repository } from 'typeorm';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';

@Injectable()
export class AuctionService {

  constructor(
    @InjectRepository(Auction)
    private auctionRepository: Repository<Auction>,
  ) {}

  create(createAuctionDto: CreateAuctionDto) {
    const auction = this.auctionRepository.create(createAuctionDto);
    return this.auctionRepository.save(auction);
  }

  findAll() {
    return this.auctionRepository.find();
  }

  findOne(id: number) {
    return this.auctionRepository.findOne({ where: { id } });
  }

  update(id: number, updateAuctionDto: UpdateAuctionDto) {
    return this.auctionRepository.update(id, updateAuctionDto);
  }

  remove(id: number) {
    return this.auctionRepository.delete(id);
  }

}
