import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/home',     title: 'Home',         icon:'nc-tile-56',       class: '' },
    // { path: '/user',          title: 'My Profile',      icon:'nc-single-02',  class: '' },
    //{ path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
    { path: '/stores',          title: 'Stores',              icon:'nc-shop',      class: '' },
    { path: '/clients', title: 'Customers',     icon:'nc-single-02',    class: '' },
    { path: '/partners',         title: 'Partners',        icon:'nc-vector',    class: '' },
    { path: '/tempPartners',    title: 'Partners Requests',        icon:'nc-user-run', class: '' },
    // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
