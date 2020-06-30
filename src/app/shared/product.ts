import {Manufacturer} from './manufacturer';
import {Comment} from './comment';
import {ExtraDetail} from './extra-detail';
export class Product {
    _id : string;
    name : string;
    description : string;
    extraDetails : [ExtraDetail];
    colors : [string];
    price : Number;
    productImages : [string];
    quantity : Number;
    category : Number;
    manufacturer : Manufacturer;
    rating : Number;
    comment : Comment;
}