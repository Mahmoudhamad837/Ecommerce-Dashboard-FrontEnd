import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userGroup: FormGroup;
  columnHeader = 
  [
    {key : 'id', value: 'ID'},
    {key : 'firstName', value: 'First Name'},
    {key : 'lastName', value: 'Last Name'},
    {key : 'userName', value: 'User Name'},
    {key : 'Action', value: 'Action', config:['Show', 'Edit', 'Delete']}
  ];

  values: any[] =[
    {label:'X', value:'x'},
    {label:'Y', value:'y'},
    {label:'Z', value:'z'}
  ];

  rdioValues: any[] = [
    {label:'A', value: 'A'},
    {label:'B', value: 'B'},
    {label:'C', value: 'C'},
    {label:'D', value: 'D'}
  ]


  tableData: PeriodicElement[] = [
    {id: 1, firstName: 'Mahmoud', lastName: 'Hammad', userName: 'MahmoudHammad'},
    {id: 2, firstName: 'Mahmoud', lastName: 'Hammad', userName: 'MahmoudHammad'},
    {id: 3, firstName: 'Mahmoud', lastName: 'Hammad', userName: 'MahmoudHammad'},
    {id: 4, firstName: 'Mahmoud', lastName: 'Hammad', userName: 'MahmoudHammad'},
    {id: 5, firstName: 'Mahmoud', lastName: 'Hammad', userName: 'MahmoudHammad'},
  ];

  constructor() { }

  ngOnInit(): void {
    this.userGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email, Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]),
      password: new FormControl('',[Validators.required]),
      check: new FormControl(null,[Validators.required]),
      rado: new FormControl(null, Validators.required)
    })
  }

  getEvent(event){
    console.log('Event:---', event);
  }

  onSubmit(){
    console.log(this.userGroup.value);
  }

}

export interface PeriodicElement {
  firstName: string;
  id: number;
  lastName: string;
  userName: string;
}