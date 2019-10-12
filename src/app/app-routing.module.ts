import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {WellcomeComponent} from "./wellcome/wellcome.component";
import {LoginComponent} from "./auth/auth/login/login.component";
import {SignupComponent} from "./auth/auth/signup/signup.component";
import {TrainingComponent} from "./training/training.component";
const  routes :Routes =[
    {path:'', component:WellcomeComponent},
    {path:'login' ,component:LoginComponent},
    {path:'signup' ,component:SignupComponent},
    {path:'training' ,component:TrainingComponent},

];
@NgModule({
    imports :[RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export  class AppRoutingModule {

}