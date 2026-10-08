import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from '../menuitem/app.menuitem.component';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    templateUrl: './app.menu.component.html',
    styleUrl: './app.menu.component.scss'
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] }]
            },
            {
                label: 'Settings',
                items: [
                    {
                        label: 'Salary Structure',
                        icon: 'pi pi-fw pi-money-bill',
                        routerLink: ['/salary-structure']
                    },
                    {
                        label: 'Tenant Settings',
                        icon: 'pi pi-fw pi-building',
                        routerLink: ['/tenant-settings']
                    },
                    {
                        label: 'Chart Of Accounts',
                        icon: 'pi pi-fw pi-book',
                        routerLink: ['/chart-of-accounts']
                    },
                    {
                        label: 'Theme Settings',
                        icon: 'pi pi-fw pi-palette',
                        routerLink: ['/theme-settings']
                    }
                ]
            },
            // ১. Appointments
            {
                label: 'Appointments',
                icon: 'pi pi-fw pi-calendar',
                items: [
                    { label: 'Appointments', icon: 'pi pi-fw pi-calendar', routerLink: ['/appointments'] },
                    { label: 'Appointment Items', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/appointment-items'] }
                ]
            },

            // ২. Customers & Loyalty
            {
                label: 'Customers & CRM',
                icon: 'pi pi-fw pi-users',
                items: [
                    { label: 'Customers', icon: 'pi pi-fw pi-user', routerLink: ['/customers'] },
                    { label: 'Memberships', icon: 'pi pi-fw pi-id-card', routerLink: ['/memberships'] },
                    { label: 'Customer Memberships', icon: 'pi pi-fw pi-star', routerLink: ['/customer-memberships'] },
                    { label: 'Customer Packages', icon: 'pi pi-fw pi-box', routerLink: ['/customer-packages'] },
                    { label: 'Package Usages', icon: 'pi pi-fw pi-history', routerLink: ['/customer-package-usages'] },
                    { label: 'Loyalty Transactions', icon: 'pi pi-fw pi-gift', routerLink: ['/loyalty-transactions'] },
                    { label: 'Customer Reviews', icon: 'pi pi-fw pi-comments', routerLink: ['/reviews'] }
                ]
            },

            // ৩. Human Resources & Payroll
            {
                label: 'HR & Payroll',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    { label: 'Employees', icon: 'pi pi-fw pi-users', routerLink: ['/employees'] },
                    { label: 'Attendances', icon: 'pi pi-fw pi-clock', routerLink: ['/employee-attendances'] },
                    { label: 'Employee Leaves', icon: 'pi pi-fw pi-calendar-minus', routerLink: ['/employee-leaves'] },
                    { label: 'Schedules', icon: 'pi pi-fw pi-calendar-times', routerLink: ['/employee-schedules'] },
                    { label: 'Commissions', icon: 'pi pi-fw pi-percentage', routerLink: ['/employee-commissions'] },
                    { label: 'Employee Skills', icon: 'pi pi-fw pi-bolt', routerLink: ['/employee-skills'] },
                    { label: 'Employee Branches', icon: 'pi pi-fw pi-map-marker', routerLink: ['/employee-branches'] },
                    { label: 'Salary Structures', icon: 'pi pi-fw pi-money-bill', routerLink: ['/salary-structures'] },
                    { label: 'Salary Slips', icon: 'pi pi-fw pi-file', routerLink: ['/salary-slips'] }
                ]
            },

            // ৪. Services & Packages
            {
                label: 'Services & Packages',
                icon: 'pi pi-fw pi-th-large',
                items: [
                    { label: 'Services', icon: 'pi pi-fw pi-server', routerLink: ['/services'] },
                    { label: 'Service Categories', icon: 'pi pi-fw pi-tags', routerLink: ['/service-categories'] },
                    { label: 'Service Prices', icon: 'pi pi-fw pi-tag', routerLink: ['/service-prices'] },
                    { label: 'Service Products', icon: 'pi pi-fw pi-paperclip', routerLink: ['/service-products'] },
                    { label: 'Packages', icon: 'pi pi-fw pi-gift', routerLink: ['/packages'] },
                    { label: 'Package Items', icon: 'pi pi-fw pi-list', routerLink: ['/package-items'] }
                ]
            },

            // ৫. Products & Inventory
            {
                label: 'Inventory & Stock',
                icon: 'pi pi-fw pi-box',
                items: [
                    { label: 'Products', icon: 'pi pi-fw pi-shopping-bag', routerLink: ['/products'] },
                    { label: 'Product Categories', icon: 'pi pi-fw pi-folder', routerLink: ['/product-categories'] },
                    { label: 'Units', icon: 'pi pi-fw pi-calculator', routerLink: ['/units'] },
                    { label: 'Suppliers', icon: 'pi pi-fw pi-truck', routerLink: ['/suppliers'] },
                    { label: 'Purchase Orders', icon: 'pi pi-fw pi-shopping-cart', routerLink: ['/purchase-orders'] },
                    { label: 'Purchase Order Items', icon: 'pi pi-fw pi-list', routerLink: ['/purchase-order-items'] },
                    { label: 'Goods Receives', icon: 'pi pi-fw pi-inbox', routerLink: ['/goods-receives'] },
                    { label: 'Goods Receive Items', icon: 'pi pi-fw pi-list', routerLink: ['/goods-receive-items'] },
                    { label: 'Stocks', icon: 'pi pi-fw pi-database', routerLink: ['/stocks'] },
                    { label: 'Stock Adjustments', icon: 'pi pi-fw pi-sliders-h', routerLink: ['/stock-adjustments'] },
                    { label: 'Stock Ledgers', icon: 'pi pi-fw pi-book', routerLink: ['/stock-ledgers'] }
                ]
            },

            // ৬. Sales, POS & Cash
            {
                label: 'Sales & POS',
                icon: 'pi pi-fw pi-credit-card',
                items: [
                    { label: 'Invoices', icon: 'pi pi-fw pi-receipt', routerLink: ['/invoices'] },
                    { label: 'Invoice Items', icon: 'pi pi-fw pi-list', routerLink: ['/invoice-items'] },
                    { label: 'Payments', icon: 'pi pi-fw pi-wallet', routerLink: ['/payments'] },
                    { label: 'Refunds', icon: 'pi pi-fw pi-replay', routerLink: ['/refunds'] },
                    { label: 'Cash Registers', icon: 'pi pi-fw pi-desktop', routerLink: ['/cash-registers'] },
                    { label: 'Cash Transactions', icon: 'pi pi-fw pi-arrows-h', routerLink: ['/cash-transactions'] },
                    { label: 'Promo Codes', icon: 'pi pi-fw pi-ticket', routerLink: ['/promo-codes'] }
                ]
            },

            // ৭. Accounting & Finance
            {
                label: 'Accounting & Finance',
                icon: 'pi pi-fw pi-chart-line',
                items: [
                    { label: 'Chart of Accounts', icon: 'pi pi-fw pi-book', routerLink: ['/chart-of-accounts'] },
                    { label: 'Journal Entries', icon: 'pi pi-fw pi-file-edit', routerLink: ['/journal-entries'] },
                    { label: 'Journal Entry Lines', icon: 'pi pi-fw pi-align-left', routerLink: ['/journal-entry-lines'] },
                    { label: 'Expenses', icon: 'pi pi-fw pi-dollar', routerLink: ['/expenses'] },
                    { label: 'Expense Categories', icon: 'pi pi-fw pi-bookmark', routerLink: ['/expense-categories'] }
                ]
            },

            // ৮. Administration & Settings
            {
                label: 'Administration & System',
                icon: 'pi pi-fw pi-cog',
                items: [
                    { label: 'Users', icon: 'pi pi-fw pi-user-plus', routerLink: ['/users'] },
                    { label: 'Roles', icon: 'pi pi-fw pi-shield', routerLink: ['/roles'] },
                    { label: 'User Roles', icon: 'pi pi-fw pi-user-edit', routerLink: ['/user-roles'] },
                    { label: 'Menus', icon: 'pi pi-fw pi-bars', routerLink: ['/menus'] },
                    { label: 'Role Menus', icon: 'pi pi-fw pi-lock', routerLink: ['/role-menus'] },
                    { label: 'User Menus', icon: 'pi pi-fw pi-key', routerLink: ['/user-menus'] },
                    { label: 'Organizations', icon: 'pi pi-fw pi-building', routerLink: ['/organizations'] },
                    { label: 'Branches', icon: 'pi pi-fw pi-sitemap', routerLink: ['/branches'] },
                    { label: 'Tenant Settings', icon: 'pi pi-fw pi-sliders-v', routerLink: ['/tenant-settings'] },
                    { label: 'Tenant Subscriptions', icon: 'pi pi-fw pi-credit-card', routerLink: ['/tenant-subscriptions'] },
                    { label: 'Subscription Plans', icon: 'pi pi-fw pi-id-card', routerLink: ['/subscription-plans'] },
                    { label: 'Audit Logs', icon: 'pi pi-fw pi-history', routerLink: ['/audit-logs'] },
                    { label: 'Notification Logs', icon: 'pi pi-fw pi-bell', routerLink: ['/notification-logs'] },
                ]
            }
        ];
    }
}
