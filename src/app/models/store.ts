export class Store {

    constructor(
  public storeName: string,
  public storeImage: string,
  public storeAddress: string,
  public storeLatitude: number,
  public storeLongitude: number,

  public storeDeliveryDistance: number,

  public storeMinOrder: number,

  public storeDeliveryTime: number,

  public storeDeliveryFee: number,

  public storeDescription: string,
  // public countryId :number,
  public storePreOrder: number,
  public storePaymentOnDeliverCash: number,
  public storePaymentVisa: number,
  public storeOrdersNumber: number,
  public storeTypeId :number,
  public cuisineId :number,
  public countryId :number,
  public cuisine ?:[{"cuisineId":number,"cuisineName":string,"totalOrdersNumber":string}],
  public country ?:[{"countryId":number,"countryName":string,"currencyName":string}],
  public storeType ?:[{"storeTypeId":number,"storeTypeName":string,"currencyName":string}],
  public storeId ?: number,
    ){}
}