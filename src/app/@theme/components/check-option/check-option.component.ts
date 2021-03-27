import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MultiCheckOption } from '../../../models/multi-check-option';

@Component({
  selector: 'app-check-option',
  templateUrl: './check-option.component.html',
  styleUrls: ['./check-option.component.scss'],
  providers: [
    {
      provide: MultiCheckOption,
      useExisting: CheckOptionComponent,
    }
  ]
})
export class CheckOptionComponent implements OnInit {

  @Input() value: any;
  @Input() label: string;
  @Input() formControlName: string;
  @Input() formControl: FormControl = new FormControl(false);

  constructor(private controlContainer: ControlContainer) {
  }
  
  get valueChanges$(): Observable<boolean> {
    return this.control.valueChanges;
  }
  
  ngOnInit(): void {
  }

  get control() {
    return this.formControl || this.controlContainer.control.get(this.formControlName);
  }

}
