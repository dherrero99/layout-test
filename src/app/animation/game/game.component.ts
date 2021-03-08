import { Component, Input, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { animations } from './animations';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  animations: animations,
})
export class GameComponent implements OnInit {
  gameZoom = 'out';
  @Input() game:{title:string,image:string};
  index:number;
  zIndex:number;
  marginLeft:number;
  marginTop:number;


  constructor(private gameService:GamesService) { }

  ngOnInit(): void {
    this.index = this.gameService.indexOf(this.game);
    this.calcPosition();
    this.gameService.gamesChanged.subscribe(
      (games)=>{
        this.index = this.gameService.indexOf(this.game);
        this.calcPosition();
      }  
    );
  }

  onClick(){
    console.log(this.index);
    console.log(this.gameZoom);
    this.gameZoom = 'in';
    console.log(this.gameZoom);
    // this.gameService.nextGame();
  }

  onAnimationEnd(event){
    console.log(event);
    if(event.fromState == 'out' && event.toState == 'in'){
      this.gameZoom = 'out';
    }
    if(event.fromState == 'in' && event.toState == 'out'){
      this.gameService.nextGame();
    }
  }

  calcPosition(){
    this.zIndex = this.gameService.getGames().length - this.index;
    this.marginLeft = this.index * 100;
    this.marginTop = this.index * 10;
  }
}
