import { Component, OnInit } from '@angular/core';
import { AdminService } from 'app/services/admin.service';
import { Client } from 'app/models/client';
import { Partner } from 'app/models/partner';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  Customers:Client[];
  searchCustomers:Client[];
  filterTerm: string;

  constructor(private toastr: ToastrService , private adminService:AdminService,private router:Router) {
      
  }
  ngOnInit(){

    this.getClients();
  }
  showNotification(from, align) {
    const color = Math.floor(Math.random() * 5 + 1);

    switch (color) {
      case 1:
        this.toastr.info(
        '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>',
          "",
          {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-info alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      case 2:
        this.toastr.success(
          '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>',
          "",
          {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-success alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      case 3:
        this.toastr.warning(
        '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>',
          "",
          {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-warning alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      case 4:
        this.toastr.error(
        '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>',
          "",
          {
            timeOut: 4000,
            enableHtml: true,
            closeButton: true,
            toastClass: "alert alert-danger alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      case 5:
        this.toastr.show(
        '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Welcome to <b>Paper Dashboard Angular</b> - a beautiful bootstrap dashboard for every web developer.</span>',
          "",
          {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-primary alert-with-icon",
            positionClass: "toast-" + from + "-" + align
          }
        );
        break;
      default:
        break;
    }
  }
  //********************Client********* */

  getClients(){
      this.adminService.getClientsCount().subscribe((_clients:Client[])=>{
        this.Customers = _clients;
        this.Customers.forEach(client => {
        client.clientDateOfBirth = this.adminService.dateFunction(client.clientDateOfBirth)
      });
      this.searchCustomers=this.Customers;
      })
  }
  delete(clientId:number,namre:string){
    if(confirm("Are you sure to delete "+name))
        {
      this.adminService.deletrClient(clientId).subscribe(
        next =>{
          this.reloadComponent();
            alert("Customer is deleted")
           
        },
        error=>{
           alert(error)
        }
        
      )
    }
    }
  reloadComponent() {
    let currentUrl = "clients";
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
    /**************Search*************/
  search(value: string): void {

    this.searchCustomers = this.Customers.filter((val) => val.clientFname.toLowerCase().includes(value));
    console.log(this.searchCustomers);
  }
}
