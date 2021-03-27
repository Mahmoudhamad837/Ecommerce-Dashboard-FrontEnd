import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class MultiCheckOption {

    value: any;

    public control = new FormControl(false);

    get valueChanges$(): Observable<boolean> {
        return this.control.valueChanges;
    }

}