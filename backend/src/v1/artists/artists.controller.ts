import { Body, Controller, Get, Param, Post, Patch } from '@nestjs/common';
import { CreateSongDto } from '../songs/dto/create-song.dto';
import { ArtistsService } from './artists.service';

@Controller('v1/artists')
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

  @Patch(':id')
  updateArtist(@Param() params, @Body() createSongDto: CreateSongDto) {
    this.artistsService.update(params.id, createSongDto);
  }
}
