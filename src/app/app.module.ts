import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigationVarComponent } from './navigation-var/navigation-var.component';
import { SquareAlignComponent } from './square-align/square-align.component';
import { TitleCircularComponent } from './title-circular/title-circular.component';
import { LoginComponent } from './login/login.component';
import { AnimationComponent } from './animation/animation.component';
import { GameComponent } from './animation/game/game.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationVarComponent,
    SquareAlignComponent,
    TitleCircularComponent,
    LoginComponent,
    AnimationComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
