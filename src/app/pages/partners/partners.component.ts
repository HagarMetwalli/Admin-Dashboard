import { Component, OnInit } from '@angular/core';
import { AdminService } from 'app/services/admin.service';
import { Client } from 'app/models/client';
import { Partner } from 'app/models/partner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
  filterTerm: string;
  constructor(private adminService:AdminService,private router:Router) {
    
  }
  ngOnInit(){
      this.getPartners();
  }

  //*********************partner***************/
  partners:Partner[];
  searchPartners:Partner[];
  partnerCount:number;

  getPartners(){
      this.adminService.getPartnersCount().subscribe((data)=>{
      this.partners= this.searchPartners=data;
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
    
  /**************Search*************/
  search(value: string): void {

    this.searchPartners = this.partners.filter((val) => val.partnerFname.toLowerCase().includes(value));
    console.log(this.searchPartners);
  }

}
