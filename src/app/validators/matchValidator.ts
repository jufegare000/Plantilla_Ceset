import { AbstractControl } from '@angular/forms';

export function ValidateMatch(toCompare: AbstractControl) {
    return (control: AbstractControl): {[key: string]: boolean} | null => {
        return toCompare.value != control.value ? {'match': true} : null;
    } 
}