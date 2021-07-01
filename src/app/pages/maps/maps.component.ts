import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from 'app/models/store';
import { AdminService } from 'app/services/admin.service';


@Component({
    moduleId: module.id,
    selector: 'maps-cmp',
    templateUrl: 'maps.component.html'
   
})

export class MapsComponent implements OnInit {
    constructor( private adminService:AdminService,private router:Router){}
   filterTerm: string;
    ngOnInit() {

        console.log("sfd");

        this.getStores();
        console.log("sfdnnn");

    }
    //********************Client********* */
    stores:Store[];
    storessCount:number;
    getStores(){
        this.adminService.getSores().subscribe(
         (next)=>{
            this.stores = next;
            this.storessCount=this.stores.length;
            console.log(this.stores)
         },
         (error)=>{
             alert("error")
         })
         
    }
    deleteStore(storeId:number,name:string){
        if(confirm("Are you sure to delete "+name))
        {
            this.adminService.deleteStore(storeId)
            .subscribe((next)=>{
                this.reloadComponent();
                alert("The Store is deleted")
            },
            (error)=>{
                alert("The Store Not Deleted")
            });
        }
    }
    reloadComponent() {
        let currentUrl = "stores";
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.onSameUrlNavigation = 'reload';
            this.router.navigate([currentUrl]);
        }
    
}
