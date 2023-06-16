import { Address } from "./address";
import { OrderDetails } from "./order-details";
import { Products } from "./products";
import { UserDetails } from "./user-details";

export class Customer {
    customerId:number;
    customerName:string;
    customerEmail:string;
    customerMobileNumber:number;
    customerUserDetails:UserDetails;
    customerAddress:Address;
    wishList:Products[];
    orderHistory:OrderDetails[];
    
}
