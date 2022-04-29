import { Injectable } from '@nestjs/common';
import { artists, songs } from 'src/utils/shared';
import { CreateSongDto } from './dto/create-song.dto';

@Injectable()
export class SongsService {
  async all() {
    return await songs.find({});
  }

  async create(createSongDto: CreateSongDto) {
    createSongDto.artist = await artists.ref({ id: createSongDto.artist });
    const songEntity = await songs.create('song', createSongDto);
    songs.commit();

    return songEntity;
  }

  async search(query: string) {
    return await songs.find({ name: query });
  }
}
