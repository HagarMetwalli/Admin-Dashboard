import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Partner } from 'app/models/partner';
import { Store } from 'app/models/store';
import { TemPartner } from 'app/models/TempPartner';
import { WelcomeRequest } from 'app/models/WelcomeRequestDto';
import { AdminService } from 'app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-temp-partners',
  templateUrl: './temp-partners.component.html',
  styleUrls: ['./temp-partners.component.css']
})
export class TempPartnersComponent implements OnInit {

  tempPartners:TemPartner[]
  searchTempPartners:TemPartner[]
  randompassword:string
  partner:Partner = new Partner("","","",0,"",0,"",0);
  store:Store = new Store("Not updaed yet","https://localhost:44311/Images/Stores/default.png","Not updaed yet",1,1,1,1,1,1,"Not updaed yet",1,1,1,1,1,1,1);
  WelcomeRequest : WelcomeRequest = new WelcomeRequest(" ", " ", " ") ;
  filterTerm: string;

  constructor(private adminService:AdminService,private router: Router,) {}    
  ngOnInit(): void
  {
      this.getTempPartners();
  }

   getTempPartners(){
      this.adminService.getTempPartners().subscribe((data)=>{
          this.tempPartners=this.searchTempPartners=data;
          
      },
      (err)=>{
          alert("erorr"+ err)
      });
      
  }
  storeId:number = 0;
     approve(temp : TemPartner,id:number){

        this.adminService.getPartnerByEmail(temp.partnerEmail).subscribe(
          next=>{
           if(next.status == 404 ) 
            {              
                // alert("The Email will send in some minutes ...");
                this.alertWithInfo();
                this.randompassword = Math.random().toString(36).slice(-12);
                this.WelcomeRequest.UserName = temp.partnerFname +" "+temp.partnerLname ;
                this.WelcomeRequest.Email = temp.partnerEmail;
                this.WelcomeRequest.Password = this.randompassword;
                // console.log("data...",this.WelcomeRequest)
                this.adminService.approvingPartner(this.WelcomeRequest).subscribe(
                    next=>{
                        this.load=false;
                        this.alertWithSuccess();
                        this.postStore(temp.tempPartnerStoreId);
                        this.deleteTemPartner(temp.tempPartnerStoreId);
                    },
                    error=>{
                        console.log("DDDDDDDDDD");
                        this.load=false;
                        this.erroalert();
          
                    })
                
            }
            else{
                this.load=false;
                this.alertEmailExist();    

            }
        }
      )
    // }
  }
  reject(id:number , name :string){
      if(confirm("Are you sure to delete "+name))
      {
          this.deleteTemPartner(id);
      }
  }

  deleteTemPartner(id:number){
      this.adminService.deleteTempPartner(id).subscribe((data)=>{
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
       this.adminService.postPartners(this.partner).subscribe( );
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

   /**************Search*************/
   search(value: string): void {

    this.searchTempPartners = this.tempPartners.filter((val) => val.partnerFname.toLowerCase().includes(value));
    console.log(this.searchTempPartners);
  }
  /************loading******** */
  load:boolean= false;
  alertWithSuccess(){  
    Swal.fire({  
        icon:'success',
        title: 'You submitted succesfully!',  
        confirmButtonColor:'green'})  
  }  
  erroalert()  
  {  
    Swal.fire({  
      icon: 'error',  
      title: 'Oops...',  
      text: 'Something went wrong, try again! ',
      confirmButtonColor:'green'  
    //   footer:  '<a [routerLink]="["/tempPartners"]">Please try again</a>'

    })  
  }  
  confirmBox(temp : TemPartner,id:number){  
    Swal.fire({  
      title: 'Are you sure want to register partner?',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes',  
      confirmButtonColor:'green',
      cancelButtonText: 'No' , 
      cancelButtonColor:'red'
    }).then((result) => { 
        if (result.value){
            this.approve(temp,id);
        } 
       else if (result.dismiss === Swal.DismissReason.cancel) {  
        this.load=false;
       }  

    })  
  } 
  alertWithInfo(){  
    Swal.fire({title:'The Email will send!',confirmButtonColor:'green',icon:'info'}).then(()=>{
        this.load=true;

    })
  }  
  alertEmailExist(){
    Swal.fire({title:'TThe Email is already exist!',confirmButtonColor:'green',icon:'error'}).then(()=>{

    })
  }
  /********reject************/
  rejectBox(id:number,name :string){  
    Swal.fire({  
      title: 'Are you sure want to reject '+name+ " ?",  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes',  
      confirmButtonColor:'green',
      cancelButtonText: 'No' , 
      cancelButtonColor:'red'
    }).then((result) => { 
        if (result.value)
        {   
            this.deleteTemPartner(id);
            this.rejectedAlert(name);

        } 
       else if (result.dismiss === Swal.DismissReason.cancel) {  
        this.load=false;
       }  

    })  
  } 
  rejectedAlert(name:string){  
    Swal.fire({title: name+' is refused successfully!',confirmButtonColor:'green'})
  }  
}
