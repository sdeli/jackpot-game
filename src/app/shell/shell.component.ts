import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';

export enum MediaBreakPoints {
  MaxLargeTablet = '(max-width: 1279px)',
}

@Component({
  selector: 'jg-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit, AfterViewChecked {
  fillerNav = Array.from({ length: 5 }, (_, i) => `Nav Item ${i + 1}`);
  sanny = true;
  breakPoint$: Observable<BreakpointState>;
  media$: Observable<MediaChange[]>;
  isMaxLargeTablet: boolean;

  @ViewChild('sideNav') sideNav: MatDrawer;

  constructor(media: MediaObserver, private readonly breakpointObserver: BreakpointObserver) {
    this.media$ = media.asObservable();
    this.breakPoint$ = breakpointObserver.observe([MediaBreakPoints.MaxLargeTablet]);
    this.isMaxLargeTablet = this.breakpointObserver.isMatched(MediaBreakPoints.MaxLargeTablet);
  }

  ngOnInit() {}
  ngAfterViewChecked() {
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
