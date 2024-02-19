abstract class Car
{
     Wheel():
     string { 
        return  '4 wheeler';
     }
     CheckAC(): string { 
        return 'Ac is available';
     }

     CallFacility(): string {
        return "Call facility supported";
     }
     abstract Price(): number;
     abstract getTotalSeats (): number;
     abstract color (): string;
    }


class Toyota extends Car
{

   
     Price(): number {
return 1000000;
}
getTotalSeats(): number
{ return 5;
}
color(): string {
return 'white';
}
}

class Hyundai  extends Car implements GPS {
    Price(): number {
    return 900000;
    }
    getTotalSeats(): number
    { return 7;
    }
    color(): string {
    return 'gray';
    }
     
    hasGPS() : boolean{
      return true;
    }

    }
    
interface GPS {
    hasGPS() : boolean;
}

 const toyota = new Toyota();
 const hyundai = new Hyundai();

 console.log(  " Toyota total price:" + toyota.Price());
 console.log(  "Toyota total Seats:"  +toyota.getTotalSeats());
 console.log(  " Toyota color:"+toyota.color());

 console.log( "Hyundai total price:" +hyundai.Price());
 console.log( "Hyundai total seats:"+hyundai.getTotalSeats());
 console.log("Hyundai color:"+hyundai.color());
 console.log(  " Hyundai Gps Support:" + hyundai.hasGPS());
 
 
 
 
 
 
 





  