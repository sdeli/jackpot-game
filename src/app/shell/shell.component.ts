import { GameCategory } from './../games/games-feed.types';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { GameCategoriesLabelMapArr } from '@app/games/game-feed.constants';

export enum MediaBreakPoints {
  MaxLargeTablet = '(max-width: 1279px)',
}

@Component({
  selector: 'jg-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit, AfterViewInit {
  gameCategories = GameCategoriesLabelMapArr;
  breakPoint$: Observable<BreakpointState>;
  media$: Observable<MediaChange[]>;
  isMaxLargeTablet: boolean;

  @ViewChild('sideNav') sideNav: MatDrawer;

  constructor(media: MediaObserver, private readonly breakpointObserver: BreakpointObserver) {
    this.media$ = media.asObservable();
    this.breakPoint$ = breakpointObserver.observe([MediaBreakPoints.MaxLargeTablet]);
    this.isMaxLargeTablet = this.breakpointObserver.isMatched(MediaBreakPoints.MaxLargeTablet);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.breakPoint$.subscribe(res => {
      this.isMaxLargeTablet = res.breakpoints[MediaBreakPoints.MaxLargeTablet];
      this.closeNavOnLargeViewPort();
    });
  }

  closeNavOnLargeViewPort() {
    if (!this.isMaxLargeTablet && this.sideNav.opened) {
      this.sideNav.toggle();
    }
  }
}
