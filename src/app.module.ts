import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogpostsController } from './blogposts/blogposts.controller';

@Module({
  imports: [],
  controllers: [AppController, BlogpostsController],
  providers: [AppService],
})
export class AppModule {}
