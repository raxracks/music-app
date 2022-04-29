import { Injectable } from '@nestjs/common';
import { artists, songs } from 'src/utils/shared';
import { CreateArtistDto } from './dto/create-artist.dto';

@Injectable()
export class ArtistsService {
  async all() {
    return await artists.find({});
  }

  async create(createArtistDto: CreateArtistDto) {
    const artistEntity = await artists.create('artist', createArtistDto);
    artists.commit();

    return artistEntity;
  }

  async allSongs(artist: string) {
    return await songs.find({ artist: { id: artist } });
  }

  async update(id: string, createArtistDto: CreateArtistDto) {
    await artists.updateOne({ id }, createArtistDto);
    artists.commit();
  }

  async search(query: string) {
    return await artists.find({ name: query });
  }
}
