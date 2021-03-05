import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnimationComponent } from "./animation/animation.component";
import { LoginComponent } from "./login/login.component";
import { SquareAlignComponent } from "./square-align/square-align.component";
import { TitleCircularComponent } from "./title-circular/title-circular.component";

const appRoutes: Routes = [
    {
        path: 'squares', component: SquareAlignComponent,data:{animation:'squares'}
    },
    {
        path: 'circular', component: TitleCircularComponent,data:{animation:'circular'}
    },
    {
        path: 'login', component: LoginComponent,data:{animation:'login'}
    },
    {
        path: 'animation', component: AnimationComponent,data:{animation:'animation'}
    },
    {
        path: '',
        redirectTo: 'squares',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}