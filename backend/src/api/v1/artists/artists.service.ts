import { Injectable } from '@nestjs/common';
import { artists, songs } from 'src/utils/shared';
import { CreateArtistDto } from './dto/create-artist.dto';

@Injectable()
export class ArtistsService {
  async all() {
    return await artists.find({});
  }

  async create(createArtistDto: CreateArtistDto) {
    console.log(createArtistDto);

    console.log(await artists.create('artist', createArtistDto));
    artists.commit();
  }

  async allSongs(artist: string) {
    return await songs.find({ artist: { id: artist } });
  }

  async update(id: string, createArtistDto: CreateArtistDto) {
    await artists.updateOne({ id }, createArtistDto);
    artists.commit();
  }
}
