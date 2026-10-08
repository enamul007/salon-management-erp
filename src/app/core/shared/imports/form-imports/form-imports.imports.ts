import { PasswordModule } from 'primeng/password';
import { DatePickerModule } from 'primeng/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';


export const FORM_IMPORTS = [
    ReactiveFormsModule,
    CommonModule,
    SelectModule,
    PasswordModule,
    ButtonModule,
    DatePickerModule
];