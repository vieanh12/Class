alert("Hello world!")
//jvscript syntax aka cú ohaso jscript
//variable
//var
//const
//let
let formatted = true
if(formatted) {
    console.log('JS so ez')
}
//statement
let message = "welcome to my site";
console.log(message)
if(window.localStorage){
    console.log('JS sp localstorage');
}


let a1;
let a_b;
let abc$;









let counter = 100;
console.log(typeof(counter));
counter = false;
console.log(typeof(counter));
counter = aptech;
console.log(typeof(counter));
let data
console.log(data);
//console.log(typeof)
counter = "aptech";;//string

//let data;
console.log(data)
console.log(typeof(data));//underfine 

let obj = null;
console.log(typeof obj);

let num = 100;
let price = 20.2;
let discount = 0.05
//check min max
console.log(number.MAX_VALUE);
console.log(number.MIN_VALUE);

//NaN not a number
console.log('T/'/2);//NaN
console.log(NaN/2)//NaN

//ket hop string
let str = 'Java'
str = str + 'Script'

//boolean
console.log(Boolean('connect'))//true
console.log(Boolean(''))//false

let studenObject={}
console.log(typeof(studentObject));

let emloyee={
    fstname : 'nguyen',
    lastname :'phu trog'
}
let contact={
    fstname:'nguyen',
    lastname:'minh chinh',
    email: 'chinh@gmail.com',
    phone: '01234567890',
    address : {
        building:'1000',
        street: 'Hbt',
        city: 'hue',
        country: 'VN'
    }
}
//truy cập vào thuộc tihs property của đối tượng object
//sử dụng . or[]: contact.fstName or contact['fstName]
console.log(contact['age']);//undefine

contact.firstname ='ngo';
console.log(contact);


let student ={
    fstname:'dao',
    lastname:'hai',
    stdid: 100
};
console.log('age')