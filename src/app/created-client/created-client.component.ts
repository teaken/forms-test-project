import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { AppState } from '../store/app.state';
import { selectAllInfo } from '../store/selector/registration.selector';

@Component({
  selector: 'app-created-client',
  templateUrl: './created-client.component.html',
})
export class CreatedClientComponent implements OnInit {
  createdClient: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.store.select(selectAllInfo).subscribe(
      (result) => {
        console.log(result)
        if (Object.values(result).length == 0) {
          this.router.navigate(['client-form/client'])
        } else {
          this.createdClient.next(result)
        }
      }
    )

  }

}
