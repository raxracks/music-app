import { DB } from 'database/VersatileDB';
import { join } from 'path';

export const songs = new DB(
  join(__dirname, '..', '..', '..', 'database', 'documents', 'songs.vdb'),
  {
    schema: join(
      __dirname,
      '..',
      '..',
      '..',
      'database',
      'schemas',
      'songs.schema.json',
    ),
  },
).read();

export const artists = new DB(
  join(__dirname, '..', '..', '..', 'database', 'documents', 'artists.vdb'),
  {
    schema: join(
      __dirname,
      '..',
      '..',
      '..',
      'database',
      'schemas',
      'artists.schema.json',
    ),
  },
).read();
