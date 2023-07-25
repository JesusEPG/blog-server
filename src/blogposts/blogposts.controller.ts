import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('blogposts')
export class BlogpostsController {
  @Get()
  findAll() {
    return `This action returns all blogposts`
  }

  @Get(`:blogpostId`)
  findOne(@Param(`blogpostId`) blogpostId: string) {
    return `This action returns the blogpost ${blogpostId}`
  }

  @Post()
  create(@Body(`name`) name: string) {
    return name
  }
}
