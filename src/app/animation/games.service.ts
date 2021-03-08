import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  gamesChanged = new Subject<{ title: string; image: string; }[]>();

  private games = [
    {
      title: 'Assasins Creed: Valhalla',
      image: 'https://d2cug2zs7gc1q5.cloudfront.net/cover/co2ed3/328x431',
    },
    {
      title: 'Cyberpunk 2077',
      image: 'https://d2cug2zs7gc1q5.cloudfront.net/cover/co2mjs/328x431',
    },
    {
      title: 'Hades',
      image: 'https://d2cug2zs7gc1q5.cloudfront.net/cover/co1qub/328x431',
    },
  ];

  constructor() {}

  getGames() :{title:string,image:string}[]{
    return this.games;
  }

  getGame(index:number) :{title:string,image:string}{
    return this.games[index];
  }

  indexOf(game:{ title: string; image: string; }){
    return this.games.indexOf(game);
  }

  nextGame() {
    console.log('nextGame');
    this.games.push(this.games.shift());
    console.log(this.games);
    this.gamesChanged.next(this.games);
  }
}
