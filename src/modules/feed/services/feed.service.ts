import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFeedPost } from '../dtos/feed-post.dto';
import { FeedPostEntity } from '../models/post.entity';

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(FeedPostEntity)
    private readonly feedRepository: Repository<FeedPostEntity>,
  ) {}

  async createPost(feedPost: CreateFeedPost) {
    const newFeedPost = this.feedRepository.create(feedPost);
    return await this.feedRepository.save(newFeedPost);
  }
}
