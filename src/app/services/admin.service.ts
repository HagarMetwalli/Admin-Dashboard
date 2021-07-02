import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import {TemPartner} from '../models/TempPartner';
import { Partner } from 'app/models/partner';
import { Client } from 'app/models/client';
import { WelcomeRequest } from 'app/models/WelcomeRequestDto';
import { Store } from 'app/models/store';
import { Router } from '@angular/router';

const API_Stores = 'https://localhost:44311/api/stores';
const API_Partner = 'https://localhost:44311/api/Partners';
const API_TempParner = 'https://localhost:44311/api/TempPartnerRegisterationDetails';
const API_Client = 'https://localhost:44311/api/Clients';
const API_StoreTypes = 'https://localhost:44311/api/StoreTypes';
const API_Cusines = 'https://localhost:44311/api/Cuisines';

const API_Countries = 'https://localhost:44311/api/Countries';
const API_Partner_Approving ='https://localhost:44311/api/Mailing/welcome';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements OnInit {

  constructor(private http : HttpClient,private datepipe: DatePipe) { 
    

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  dateFunction(date:Date){
    let latest_date =this.datepipe.transform(date, 'dd/MM/yyyy');
    return latest_date;
   }
  //*************************************Client**********************************
  
  getClientsCount(): Observable<any> {
    return this.http.get <Client[]>(API_Client,{ observe: 'response' })
    .pipe(
      map((res) => {
        if (res) {
          if (res.status === 200) {
            return res.body;
          }
          return res.status;
        }
      }),
      catchError((error: any) => {
        if (error.status > 400 || error.status === 500) {
          return [{ status: error.status }];
        }
        return error.status;
      })
    );    
 }
 deletrClient(clientId:number): Observable<any> {
  return this.http.delete<any>(API_Client+"/"+clientId,{ observe: 'response' })
  .pipe(
    map((res) => {
      if (res) {
        if (res.status === 200) {
          return res.body;
        }
        return res.status;
      }
    }),
    catchError((error: any) => {
      if (error.status > 400 || error.status === 500) {
        return [{ status: error.status }];
      }
      return error.status;
    })
  );    
}
  //*************************************Partner**********************************
  getPartnersCount(): Observable<any> {
    return this.http.get <Partner[]>(API_Partner,{ observe: 'response' })
    .pipe(
      map((res) => {
        if (res) {
          if (res.status === 200) {
            return res.body;
          }
          return res.status;
        }
      }),
      catchError((error: any) => {
        if (error.status > 400 || error.status === 500) {
          return [{ status: error.status }];
        }
        return error.status;
      })
    );    
 }
 getPartnerByEmail(email:string): Observable<any> {
  return this.http.get <Partner>(API_Partner+"/GetpartnerByEmail/"+email,{ observe: 'response' })
  .pipe(
    map((res) => {
      if (res) {
        if (res.status === 200) {
          return res.body;
        }
        return res.status;
      }
    }),
    catchError((error: any) => {
      if (error.status > 400 || error.status === 500) {
        return [{ status: error.status }];
      }
      return error.status;
    })
  );    
}
 approvingPartner(WelcomeRequest:WelcomeRequest) {
   console.log("obj",WelcomeRequest)
    return this.http.post(API_Partner_Approving,WelcomeRequest)
 }
 postPartners(partner:Partner): Observable<any> {
  return this.http.post <any>(API_Partner,partner,{ observe: 'response' })
  .pipe(
    map((res) => {
      if (res) {
        if (res.status === 200) {
          return res.body;
        }
        return res.status;
      }
    }),
    catchError((error: any) => {
      if (error.status > 400 || error.status === 500) {
        return [{ status: error.status }];
      }
      return error.status;
    })
  );    
}
deletePartner(partnerId:number): Observable<any> {
  return this.http.delete<any>(API_Partner+"/"+partnerId,{ observe: 'response' })
  .pipe(
    map((res) => {
      if (res) {
        if (res.status === 200) {
          return res.body;
        }
        return res.status;
      }
    }),
    catchError((error: any) => {
      if (error.status > 400 || error.status === 500) {
        return [{ status: error.status }];
      }
      return error.status;
    })
  );    
}

//****************************************TempPartner***************************** */
getTempPartners(): Observable<any> {
  return this.http.get <TemPartner[]>(API_TempParner,{ observe: 'response' })
  .pipe(
    map((res) => {
      if (res) {
        if (res.status === 200) {
          return res.body;
        }
        return res.status;
      }
    }),
    catchError((error: any) => {
      if (error.status > 400 || error.status === 500) {
        return [{ status: error.status }];
      }
      return error.status;
    })
  );    
}
deleteTempPartner(id:number): Observable<any> {
  return this.http.delete <any>(API_TempParner+"/"+id,{ observe: 'response' })
  .pipe(
    map((res) => {
      if (res) {
        if (res.status === 200) {
          return res.body;
        }
        return res.status;
      }
    }),
    catchError((error: any) => {
      if (error.status > 400 || error.status === 500) {
        return [{ status: error.status }];
      }
      return error.status;
    })
  );    
}
//**************************store********************* */
postStore(store:Store) {
  return this.http.post<Store>(API_Stores, store)
   
}

getSores(): Observable<any> {
  return this.http.get<Store[]>("https://localhost:44311/api/Stores",{ observe: 'response' })
  .pipe(
    map((res) => {
      if (res) {
        if (res.status === 200) {
          return res.body;
          console.log(res.body)
        }
        return res.status;
      }
    }),
    catchError((error: any) => {
      if (error.status > 400 || error.status === 500) {
        return [{ status: error.status }];
      }
      return error.status;
    })
  );    
}

getMostCommonStores(): Observable<any> {
  return this.http.get <string[]>(API_Stores+"/MostCommonStores",{ observe: 'response' })
  .pipe(
    map((res) => {
      if (res) {
        if (res.status === 200) {
          return res.body;
        }
        return res.status;
      }
    }),
    catchError((error: any) => {
      if (error.status > 400 || error.status === 500) {
        return [{ status: error.status }];
      }
      return error.status;
    })
  );    
}
getMostCommonStoresByName(name:string): Observable<any> {
  return this.http.get <Store>(API_Stores+"/GetByName/"+name,{ observe: 'response' })
  .pipe(
    map((res) => {
      if (res) {
        if (res.status === 200) {
          return res.body;
        }
        return res.status;
      }
    }),
    catchError((error: any) => {
      if (error.status > 400 || error.status === 500) {
        return [{ status: error.status }];
      }
      return error.status;
    })
  );    
}
deleteStore(id:number): Observable<any> {
  return this.http.delete <any>(API_Stores+"/"+id,{ observe: 'response' })
  .pipe(
    map((res) => {
      if (res) {
        if (res.status === 200) {
          return res.body;
        }
        return res.status;
      }
    }),
    catchError((error: any) => {
      if (error.status > 400 || error.status === 500) {
        return [{ status: error.status }];
      }
      return error.status;
    })
  );    
}
}
 