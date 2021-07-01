import { Component, OnInit } from '@angular/core';
import { AdminService } from 'app/services/admin.service';
import { Client } from 'app/models/client';
import { Partner } from 'app/models/partner';
import { Router } from '@angular/router';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    filterTerm: string;
    constructor(private adminService:AdminService,private router:Router) {
      
    }
    ngOnInit(){
        this.getPartners();
    }

    //*********************partner***************/
    partners:Partner[];
    partnerCount:number;

    getPartners(){
        this.adminService.getPartnersCount().subscribe((data)=>{
        this.partners=data;
        console.log(data)
        
    })
    }
    delete(partnerId:number , name:string){
      if(confirm("Are you sure to delete  "+name))
      {
        this.adminService.deletePartner(partnerId).subscribe(
          next=>{
            this.reloadComponent();
              alert("partner is deleted ")
             
          },
          error=>{
             alert(error)
          }
          
        )
      }
    }
    reloadComponent() {
      let currentUrl = "partners";
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([currentUrl]);
      }
}
