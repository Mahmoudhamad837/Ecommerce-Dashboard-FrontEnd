import { Component, OnInit } from '@angular/core';
import { NbSpinnerService } from '@nebular/theme';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private spinner$: NbSpinnerService ) { }

  ngOnInit() {
    this.spinner$.load();
  }

}
