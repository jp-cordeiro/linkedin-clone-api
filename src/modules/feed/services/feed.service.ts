import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFeedPost, UpdateFeedPost } from '../dtos/feed-post.dto';
import { FeedPostEntity } from '../models/post.entity';

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(FeedPostEntity)
    private readonly feedRepository: Repository<FeedPostEntity>,
  ) {}

  async findPostById(id: number): Promise<FeedPostEntity> {
    return await this.feedRepository.findOne({ where: { id } });
  }

  async createPost(feedPost: CreateFeedPost): Promise<FeedPostEntity> {
    const newFeedPost = this.feedRepository.create(feedPost);
    return await this.feedRepository.save(newFeedPost);
  }

  async findAllPosts(): Promise<FeedPostEntity[]> {
    return await this.feedRepository.find({ take: 20 });
  }

  async updatePost(
    feedPost: Partial<UpdateFeedPost>,
  ): Promise<FeedPostEntity | Error> {
    const { id } = feedPost;
    const post = await this.findPostById(id);
    if (!post) {
      throw new NotFoundException('invalid post');
    }
    return await this.feedRepository.save(feedPost);
  }
}
