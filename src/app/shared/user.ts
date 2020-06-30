export class User {
    _id : string;
    email : string;
    password : string;
    isAdmin : Boolean;
    firstName : string;
    lastName : string;
    addresses : [{
        country : string;
        city : string;
        street : string;
        building : string;
        GMLocation : string;
        AdditionalInfo : string;
    }];
    images : [string];
}