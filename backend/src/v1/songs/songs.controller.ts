import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { SongsService } from './songs.service';

@Controller('v1/songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get()
  allSongs() {
    return this.songsService.all();
  }

  @Get('search/:query')
  searchSongs(@Param() params) {
    return this.songsService.search(params.query);
  }

  @Post()
  async createSong(@Body() createSongDto: CreateSongDto) {
    return await this.songsService.create(createSongDto);
  }
}
