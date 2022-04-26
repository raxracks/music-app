import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateSongDto } from '../songs/dto/create-song.dto';
import { ArtistsService } from './artists.service';

@Controller('api/v1/artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Get()
  allArtists() {
    return this.artistsService.all();
  }

  @Get(':name/songs')
  allSongs(@Param() params) {
    return this.artistsService.allSongs(params.name);
  }

  @Post()
  createSong(@Body() createSongDto: CreateSongDto) {
    this.artistsService.create(createSongDto);
  }
}
