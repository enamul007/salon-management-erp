import { ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { TextareaModule } from 'primeng/textarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ButtonModule } from 'primeng/button';

export const FORM_IMPORTS = [
    ReactiveFormsModule,

    InputTextModule,
    PasswordModule,
    CheckboxModule,
    SelectModule,
    DatePickerModule,
    InputNumberModule,
    TextareaModule,
    ButtonModule,
    RadioButtonModule,
    ToggleSwitchModule
];