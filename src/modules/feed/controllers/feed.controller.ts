import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { CreateFeedPost, UpdateFeedPost } from '../dtos/feed-post.dto';
import { FeedService } from '../services/feed.service';

@Controller('feed')
export class FeedController {
  constructor(private feedService: FeedService) {}

  @Post()
  async create(@Body() post: CreateFeedPost) {
    return await this.feedService.createPost(post);
  }

  @Get()
  async list() {
    return await this.feedService.findAllPosts();
  }

  @Patch()
  async update(@Body() post: UpdateFeedPost) {
    return await this.feedService.updatePost(post);
  }
}
