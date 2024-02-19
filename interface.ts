interface IProduct {

 

    // all the method are abstract method in interface.

    // all methods from interface are by default public .

    

    id: number;

    name: string;

    description: string;

    price: number;

 

}

 

 

var objProduct : IProduct = {

    id: 101,

    name: "IPhone",

    description: "It's Awesome",

    price: 100000

}

 

console.log(objProduct);