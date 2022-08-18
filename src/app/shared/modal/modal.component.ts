import { Component, Inject, Input, OnInit } from '@angular/core';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { filter, take, tap } from 'rxjs';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor(private router: Router, @Inject(MAT_DIALOG_DATA) public data: any,private dialogRef: MatDialogRef<ModalComponent>) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationStart),
      tap(() => this.dialogRef.close()),
      take(1),
    ).subscribe();
  }

  onClick(){
    this.router.navigate([this.data.routerAddress])
  }
}
