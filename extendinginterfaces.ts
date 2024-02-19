interface IExterior {

    color: string;

    nomOfDoors: number;

}

 

 

interface IInterior {

    seats: number;

    auto: boolean;

}

 

interface ICar extends IExterior, IInterior {

 

    make: string;

    model: string;

    year: number;

}

 

 

var myCar: ICar = {

    make: "Tata",

    model: "Nexon",

    year: 2024,

    color: "balck",

    nomOfDoors: 4,

    seats: 5,

    auto: false

}

 

 

console.log(myCar);