import { Component, OnInit } from '@angular/core';
import { animations } from './animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: animations,
})
export class AnimationComponent implements OnInit {
  color = 'red';
  zoom = 'out';
  opacity = 'opaque';

  constructor() {}

  ngOnInit(): void {}

  onChangeColor() {
    this.color = this.color == 'red' ? 'blue' : 'red';
  }

  onChangeZoom() {
    this.zoom = this.zoom == 'out' ? 'in' : 'out';
  }

  onChangeOpacity() {
    this.opacity = this.opacity == 'opaque' ? 'transparent' : 'opaque';
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
