import { Component, OnInit } from '@angular/core';
import { NbSpinnerService } from '@nebular/theme';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private spinner$: NbSpinnerService ) { }

  ngOnInit() {
    this.spinner$.load();
  }

}
