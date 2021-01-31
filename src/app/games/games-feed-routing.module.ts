import { GamesFeedComponent } from './games-feed.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'new', pathMatch: 'full' },
  { path: ':gameType', component: GamesFeedComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesFeedRoutingModule {}
