import { DescriptionDialogComponent } from './components/create-user/description-dialog.component';
import { MaterialModule } from '../shared/material.module';
import { GamesFeedRoutingModule } from './games-feed-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesFeedComponent } from './games-feed.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [GamesFeedComponent, DescriptionDialogComponent],
  imports: [CommonModule, GamesFeedRoutingModule, HttpClientModule, FlexLayoutModule, MaterialModule],
})
export class GamesFeedModule {}
