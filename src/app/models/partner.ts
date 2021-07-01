export class Partner {
    constructor(
      
      public partnerFname: string,
      public partnerLname: string,
      public partnerEmail: string,
      public partnerPhoneNo:number,
      public partnerPassword: string,

      public StoreId?: number,
      public token?: string,
      public partnerId?:number,
      public  store ?:[{
        storeName: string,
        storeImage: string,
        storeAddress: string,
        storeLatitude: number,
        storeLongitude: number,
     
        storeDeliveryDistance: number,
     
        storeMinOrder: number,
     
        storeDeliveryTime: number,
     
        storeDeliveryFee: number,
     
        storeDescription: string,
       
        storePreOrder: number,
        storePaymentOnDeliverCash: number,
        storePaymentVisa: number,
        storeOrdersNumber: number,
        countryId :number,
        storeTypeId :number,
        cuisineId :number,
        storeId ?: number,
         }],
    ) {}
  }
  