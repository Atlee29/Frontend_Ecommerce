import { Dealer } from "./dealer";
import { ProductDetails } from "./product-details";

export class Products {
    productId:number;
    productCategory:string;
    productPrice:number;
    productAvailableCount:number;
    productRating:number;
    productStatus:string;
    productDetails:ProductDetails;
    availableDealers:Dealer[];
}
