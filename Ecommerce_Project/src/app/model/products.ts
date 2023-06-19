import { Dealer } from "./dealer";
import { ProductDetails } from "./product-details";

export class Products {
    productId:number;
    productCategory:string;
    productPrice:number;
    productAvailableCount:number;
    productRating:number;
    productStatus:string;
    productPhoto:any;
    productDetails:ProductDetails;
    availableDealers:Dealer[]; 
}
