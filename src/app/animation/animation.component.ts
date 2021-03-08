import { Component, OnInit } from '@angular/core';
import { GamesService } from './games.service';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
})
export class AnimationComponent implements OnInit {
  games: { title: string; image: string }[];

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.games = this.gamesService.getGames();
    this.gamesService.gamesChanged.subscribe((games) => {
      this.games = games;
    });
  }

  nextGame(){
    this.gamesService.nextGame();
  }
}
