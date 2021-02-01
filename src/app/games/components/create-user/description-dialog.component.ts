import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'jg-description-dialog',
  templateUrl: './description-dialog.component.html',
  styleUrls: ['./description-dialog.component.scss'],
})
export class DescriptionDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DescriptionDialogComponent>) {}

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }
}
