import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Partner } from 'app/models/partner';
import { Store } from 'app/models/store';
import { TemPartner } from 'app/models/TempPartner';
import { WelcomeRequest } from 'app/models/WelcomeRequestDto';
import { AdminService } from 'app/services/admin.service';


@Component({
    selector: 'typography-cmp',
    moduleId: module.id,
    templateUrl: 'typography.component.html'
})

export class TypographyComponent implements OnInit{
    
    tempPartners:TemPartner[]
    randompassword:string
    partner:Partner = new Partner("","","",0,"",0,"",0);
    store:Store = new Store("Not updaed yet","https://localhost:44311/Images/Stores/defaut.png","Not updaed yet",1,1,1,1,1,1,"Not updaed yet",1,1,1,1,1,1,1);
    WelcomeRequest : WelcomeRequest = new WelcomeRequest(" ", " ", " ") ;
    status:string = "Pending";
    filterTerm: string;

    constructor(private adminService:AdminService,private router: Router,) {}    
    ngOnInit(): void
    {
        this.getTempPartners();
    }

    getTempPartners(){
        this.adminService.getTempPartners().subscribe((data)=>{
            this.tempPartners=data;
            console.log("data",this.tempPartners)
        },
        (err)=>{
            alert("erorr"+ err)
        });
        
    }
    storeId:number = 0;
    approve(temp : TemPartner,id:number){
       // console.log(temp.partnerEmail)
     
       if(confirm("Are you sure to approve "+name))
       {
        this.status="Waiting"
        this.randompassword = Math.random().toString(36).slice(-12);
        this.WelcomeRequest.UserName = temp.partnerFname +" "+temp.partnerLname ;
        this.WelcomeRequest.Email = temp.partnerEmail;
        this.WelcomeRequest.Password = this.randompassword;
        console.log("data...",this.WelcomeRequest)
       
        alert("The Email will send in some minutes ...")
        this.adminService.approvingPartner(this.WelcomeRequest).subscribe(
            (next)=>{
            alert("The Email was sent");
                this.postStore(temp.tempPartnerStoreId);
                this.deleteTemPartner(temp.tempPartnerStoreId);
            },
            (error)=>{
                this.status="Pending"
                alert("The Email didn't send, try again");

            })
        }
    }
    reject(id:number , name :string){
        if(confirm("Are you sure to delete "+name))
        {
            this.deleteTemPartner(id);
        }
    }

    deleteTemPartner(id:number){
        this.adminService.deleteTempPartner(id).subscribe((data)=>{
            console.log("delete",data);
            this.reloadComponent();
        })
    }
    reloadComponent() {
        let currentUrl = "tempPartners";
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.onSameUrlNavigation = 'reload';
            this.router.navigate([currentUrl]);
        }

    postPartner(temp:TemPartner, id:number){
        this.partner.partnerFname = temp.partnerFname;
        this.partner.partnerLname = temp.partnerLname;
        this.partner.partnerPassword = this.randompassword;
        this.partner.partnerEmail =  temp.partnerEmail;
        this.partner.partnerPhoneNo = temp.partnerPhoneNumber;
         this.partner.StoreId =id;
         this.adminService.postPartners(this.partner).subscribe((data)=>{
         });
    }
    /***********************Store************** */
    errorMessage:any;
    postStore(tempId:number){
       var temp = this.tempPartners.find(x=>x.tempPartnerStoreId==tempId);
    //    this.store.countryId = temp.storeCountryId
       this.store.storeAddress = temp.storeAddress;
       this.store.storeTypeId = temp.storeTypeId;
       this.adminService.postStore(this.store).subscribe((data)=>{
           this.storeId = data.storeId;
           console.log("data222",data.storeId)
           this.postPartner(temp,this.storeId);
       });
    
    }

}
