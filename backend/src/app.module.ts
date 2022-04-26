import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsController } from './v1/songs/songs.controller';
import { SongsService } from './v1/songs/songs.service';
import { ArtistsService } from './v1/artists/artists.service';
import { ArtistsController } from './v1/artists/artists.controller';

@Module({
  imports: [],
  controllers: [AppController, SongsController, ArtistsController],
  providers: [AppService, SongsService, ArtistsService],
})
export class AppModule {}
