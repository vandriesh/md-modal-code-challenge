import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DetailsModalComponent} from './detailsModal/details-modal.component';
import {RegisterService} from './register.service';
import {Details} from './details';

@Component({
  selector: 'app-root',
  template: `
  <div style="padding: 10px">
    <button
      mat-raised-button
      color="primary"
      type="submit"
      (click)="showDetailsModal()"
    >
      Add Information
    </button>
  </div>
`,
})
export class AppComponent {
  title = 'test';

  constructor(private register: RegisterService, public dialog: MatDialog) {}

  showDetailsModal(): void {
    const dialogRef = this.dialog.open(DetailsModalComponent);

    dialogRef.afterClosed().subscribe((result: Details) => {
      this.register.save(result);
    });
  }
}
