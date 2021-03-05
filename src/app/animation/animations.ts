import { animate, state, style, transition, trigger } from "@angular/animations";

export const animations = [
    trigger('colors',[
      state('red',style({
        'background-color':'red'
      })),
      state('blue',style({
        'background-color':'blue'
      })),
      transition('* => *',animate(300))
    ]),
    trigger('zooming',[
      state('on',style({
        'width':'600px',
        'height':'600px',
      })),
      state('out',style({
        'width':'400px',
        'height':'400px',
      })),
      transition('* => *',animate(300))
    ]),
    trigger('opacity',[
      state('opaque',style({
        'opacity':'1',
      })),
      state('transparent',style({
        'opacity':'0',
      })),
      transition('* => *',animate(300))
    ]),
  ]