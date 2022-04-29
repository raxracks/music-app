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

  @Get('search/:query')
  searchSongs(@Param() params) {
    return this.artistsService.search(params.query);
  }

  @Post()
  async createSong(@Body() createSongDto: CreateSongDto) {
    return await this.artistsService.create(createSongDto);
  }
  
  @Patch(':id')
  updateArtist(@Param() params, @Body() createSongDto: CreateSongDto) {
    this.artistsService.update(params.id, createSongDto);
  }
}
