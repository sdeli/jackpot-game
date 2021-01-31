import { GamesFeedRoutingModule } from './games-feed-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesFeedComponent } from './games-feed.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [GamesFeedComponent],
  imports: [CommonModule, GamesFeedRoutingModule, HttpClientModule, FlexLayoutModule],
})
export class GamesFeedModule {}
