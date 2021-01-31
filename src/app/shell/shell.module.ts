import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@app/shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShellComponent } from './shell.component';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule, BrowserAnimationsModule, BrowserModule],
  declarations: [ShellComponent],
})
export class ShellModule {}
