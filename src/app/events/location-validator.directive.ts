import { Directive } from "@angular/core";
import { FormGroup, Validator, NG_VALIDATORS } from "@angular/forms";

@Directive(
{
    selector: '[validateLocation]',
    providers:
    [
        {
            provide: NG_VALIDATORS,
            useExisting: LocationValidator,
            multi: true
        }
    ]
})

export class LocationValidator implements Validator
{
    validate(formGroup: FormGroup): { [key:string]:any }
    {
        let addressControl = formGroup.controls['address'];
        let cityControl = formGroup.controls['city'];
        let countryControl = formGroup.controls['country'];
        let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

        let addressValid = (addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value);
        let urlValid = (onlineUrlControl && onlineUrlControl.value);

        if(addressValid || urlValid)
        {
            return null;
        }
        else
        {
            return { validateLocation: false };
        }

    }
}
