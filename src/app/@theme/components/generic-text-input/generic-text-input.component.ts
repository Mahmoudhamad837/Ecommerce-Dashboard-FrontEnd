import { Component, Injector, Input, OnInit, ViewChild } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormControlDirective, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-generic-text-input',
  templateUrl: './generic-text-input.component.html',
  styleUrls: ['./generic-text-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: GenericTextInputComponent,
    multi: true
  }]
})
export class GenericTextInputComponent implements OnInit, ControlValueAccessor  {

  @Input() placeholder: string;
  @Input() errorMessage: string;
  @Input() type: string;
  @Input() pattern: string;
  @Input() isRequired: boolean;
  @Input() label: string;
  @ViewChild(FormControlDirective, {static: true})
  formControlDirective: FormControlDirective;
  @Input() formControl: FormControl;
  @Input() formControlName: string;

  get control() {
    return this.formControl || this.controlContainer.control.get(this.formControlName);
  }

  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit(): void {
  }

  registerOnTouched(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnTouched(fn);
  }

  registerOnChange(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnChange(fn);
  }

  writeValue(obj: any): void {
    this.formControlDirective.valueAccessor.writeValue(obj);
  }

  setDisabledState(isDisabled: boolean): void {
    this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
  }
  
}
