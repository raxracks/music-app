import { Injectable } from '@nestjs/common';
import { artists, songs } from 'src/utils/shared';
import { CreateSongDto } from './dto/create-song.dto';

@Injectable()
export class SongsService {
  async all() {
    console.log(await songs.find({ artist: { name: 'WeTheSusMusic' } }));
    return await songs.find({});
  }

  async create(createSongDto: CreateSongDto) {
    createSongDto.artist = await artists.ref({ name: createSongDto.artist });
    console.log(await songs.create('song', createSongDto));
    songs.commit();
  }
}
