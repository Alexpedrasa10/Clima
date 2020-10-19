import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClimaComponent} from '@components/clima/clima.component';
import {HomeComponent} from '@components/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'clima', component: ClimaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
