import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const rockBands = [
      { id: 1, name: 'The Beatles' },
      { id: 2, name: 'Led Zeppelin' },
      { id: 3, name: 'Pink Floyd' },
      { id: 4, name: 'The Rolling Stones' },
      { id: 5, name: 'Queen' },
      { id: 6, name: 'The Who' },
      { id: 7, name: 'AC/DC' },
      { id: 8, name: 'Jimi Hendrix' },
      { id: 9, name: 'The Doors' },
      { id: 10, name: 'Nirvana' }
    ];
    return {rockBands};
  }
}
