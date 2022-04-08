import { Body, Controller, Post } from '@nestjs/common';
import { CreateFeedPost } from '../dtos/feed-post.dto';
import { FeedService } from '../services/feed.service';

@Controller('feed')
export class FeedController {
  constructor(private feedService: FeedService) {}

  @Post()
  async create(@Body() post: CreateFeedPost) {
    return this.feedService.createPost(post);
  }
}
