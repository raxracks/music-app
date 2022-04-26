import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsController } from './api/v1/songs/songs.controller';
import { SongsService } from './api/v1/songs/songs.service';
import { ArtistsService } from './api/v1/artists/artists.service';
import { ArtistsController } from './api/v1/artists/artists.controller';

@Module({
  imports: [],
  controllers: [AppController, SongsController, ArtistsController],
  providers: [AppService, SongsService, ArtistsService],
})
export class AppModule {}
