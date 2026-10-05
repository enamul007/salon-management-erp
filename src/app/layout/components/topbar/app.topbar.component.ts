import { Component, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass'; 
import { LayoutService } from '@/app/layout/service/layout.service';
import { AppConfigurator } from '../configurator/app.configurator.component';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, AppConfigurator],
    templateUrl: './app.topbar.component.html',
    styleUrl: './app.topbar.component.scss'
})
export class AppTopbar {
    items!: MenuItem[];
    layoutService = inject(LayoutService);

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({
            ...state,
            darkTheme: !state.darkTheme
        }));
    }
}