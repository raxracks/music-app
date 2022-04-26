import { Body, Controller, Get, Param, Post, Patch } from '@nestjs/common';
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

  @Patch()
  updateArtist(@Body() createSongDto: CreateSongDto) {
    this.artistsService.update('f67h56t53l1iu74a40w3', createSongDto);
  }
}
