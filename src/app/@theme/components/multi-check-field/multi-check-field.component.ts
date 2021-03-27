import { AfterContentInit, Component, ContentChildren, forwardRef, OnDestroy, OnInit, QueryList } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MultiCheckOption } from '../../../models/multi-check-option';

@Component({
  selector: 'app-multi-check-field',
  templateUrl: './multi-check-field.component.html',
  styleUrls: ['./multi-check-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiCheckFieldComponent),
      multi: true
    }
  ]
})
export class MultiCheckFieldComponent implements OnInit, AfterContentInit, OnDestroy, ControlValueAccessor {
  ngOnInit() {
  }

  @ContentChildren(MultiCheckOption, { descendants: true }) options!: QueryList<MultiCheckOption>;

  private subscriptions = new Subscription();
  private selectedValues: any[] = [];

  _onChange: (_: any) => void;

  ngAfterContentInit(): void {
    this.options.forEach(option => {
      this.subscriptions.add(
        option.valueChanges$.subscribe(
          optionChecked => {
            if (optionChecked) {
              this.add(option.value);
            } else {
              this.remove(option.value);
            }
          }
        )
      );
    });
  }

  private add(value: any): void {
    this.selectedValues.push(value);
    this._onChange(this.selectedValues);
  }

  private remove(value: any): void {
    const idx = this.selectedValues.findIndex(v => v === value);
    if (idx >= 0) {
      this.selectedValues.splice(idx, 1);
      this._onChange(this.selectedValues);
    }
  }

  writeValue(values: any[]): void {
    values = values || [];
    this.selectedValues = [];
    values.forEach(selectedValue => {
      const selectedOption = this.options.find(v => v.value === selectedValue);
      selectedOption.control.setValue(true);
    });
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {

  }

  setDisabledState?(isDisabled: boolean): void {

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
