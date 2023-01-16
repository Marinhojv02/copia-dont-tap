import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TilesComponent } from './game/tiles/tiles.component';


const routes: Routes = [
  {path: '', component: TilesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
