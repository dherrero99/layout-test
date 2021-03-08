import { animate, state, style, transition, trigger } from "@angular/animations";

export const animations = [
    trigger('gameZoom',[
      state('out',style({
        'opacity':'1',
        'width':'300px',
        'height':'400px',
      })),
      state('in',style({
        'opacity':'0',
        'width':'330px',
        'height':'430px'
      })),
      transition('out => in',animate('300ms')),
      transition('in => out',animate('0ms'))
    ]),
  ]