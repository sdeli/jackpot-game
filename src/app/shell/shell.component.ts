import { BreakpointObserver, BreakpointState, MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';

export enum BreakPoints {
  MaxLargeHandset = '(max-width: 599px)',
  Delete = 'Delete',
  Edit = 'Edit',
  FetchList = 'FetchList',
  FetchItemById = 'FetchItemById',
}

@Component({
  selector: 'jg-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit, AfterViewInit {
  fillerNav = Array.from({ length: 5 }, (_, i) => `Nav Item ${i + 1}`);
  sanny = true;
  breakPoint$: Observable<BreakpointState>;
  media$: Observable<MediaChange[]>;
  isMaxLargeHandset: boolean;

  @ViewChild('sideNav') sideNav: MatDrawer;

  constructor(media: MediaObserver, private readonly breakpointObserver: BreakpointObserver) {
    this.media$ = media.asObservable();
    this.breakPoint$ = breakpointObserver.observe(['(max-width: 599px)']);
    this.isMaxLargeHandset = this.breakpointObserver.isMatched(BreakPoints.MaxLargeHandset);
  }

  ngOnInit() {}
  ngAfterViewInit() {
    this.breakPoint$.subscribe(res => {
      this.isMaxLargeHandset = res.breakpoints[BreakPoints.MaxLargeHandset];
      this.closeNavOnLargeViewPort();
    });
  }

  closeNavOnLargeViewPort() {
    if (!this.isMaxLargeHandset && this.sideNav.opened) {
      this.sideNav.toggle();
    }
  }
}
