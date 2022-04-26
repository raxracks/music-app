import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { SongsService } from './songs.service';

@Controller('/api/v1/songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get()
  allSongs() {
    return this.songsService.all();
  }

  @Post()
  createSong(@Body() createSongDto: CreateSongDto) {
    this.songsService.create(createSongDto);
  }
}
