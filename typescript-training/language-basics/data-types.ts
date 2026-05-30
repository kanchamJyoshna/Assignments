
//primitive data types(immutable)

//number

let empId: number = 1234 ;
console.log(empId)

//string
let empFirstName:string = "Jyoshna";
let empLastName:string = 'kancham';

console.log(`employee name is ${empFirstName}  ${empLastName}`)

//boolean

let doYouHaveVisa:boolean = true;
console.log(doYouHaveVisa)


//undefined 

let empStatus : undefined ;
console.log(empStatus)

//null

let empSalary : null = null;
console.log(empSalary)

//union ==> can allow the multiple data types what ever we declared at the time of variable declaration

let empAddress : string | number ;

empAddress = "Hyderabad"
console.log(empAddress)
empAddress = 560081
console.log(empAddress)

//any ---> we can use any data type

let data : any;

data = 1234
console.log(data)

data  = "HYD"
console.log(data)

data = true ;
console.log(data)

data = null
console.log(data)

//

interface personinfo  {
    name:string ,
    age : number,
    empId : number,
    visa : boolean,
    address:{
        city : string ,
        state : string
    }

}


let person: personinfo = {

    "name" : "Jyoshna",
    "age"  :  35 ,
    "empId" : 2468 ,
    "visa"  : false ,
    "address" : {
        "city" : "Bangalore",
        "state" : "karnataka"
    }

}

//access the data

console.log(person.name)
console.log(person["name"])
console.log(person.address.city)
console.log(person.address["state"])


//array In typescript we have to pass the datatype and [] . [] represents the array

let fruits: string[] = ["Apple","Mango","sapota","grapes"]
let price:number[] =[100,150,40,60]
let fuitsAndPrice:(string|number)[] = ["Apple",100,"Mango",150,"sapota",40,"grapes",60]

console.log(fruits[1])
console.log(price[2])
console.log(fuitsAndPrice[0])

//Tuple is an ordered array that represents the list of values in a specific order

//Problem statement : Store employee name , employee phone number , employee vis together

//Array

let empDetails:(string|number|boolean)[] = ["Sai",24567892678,true]
let empDetails1:(string|number|boolean)[] = [24567892678,"Sai",true] ///without order array allows 
let empDetails2:(string|number|boolean)[] = [24567892678,"Sai",true,"ram"] ///it can allow any number variables 


//tuple 

let empInfo:[string , number , boolean] =["vishnu",2468,true]
//let empInfo1:[string , number , boolean] =["vishnu",2468,true,145] //If we pass exxtra or less values then it will throw error
//let empInfo2:[string , number , boolean] =["vishnu",true,121245] //if order is not matching also it will throw error



// function ==> function represents the blok of code or collection of statements  written together to complete a speific task

//if there is nothing to return in such scenarios we will give the data type as void

function LoginToApplication(browser:string, url:string): void{

    console.log(`launch  the ${browser} Browser`);
    console.log(`Enter the URL :${URL}`);
    console.log("Enter the user name as 'jyoshna' and password as 'Jyoshna@123'");
    console.log("click on the log out Button");

}


//==========================set =========================


let empIds:Set<number|string> = new Set();    ///here if we are giving 

empIds.add(1234)
empIds.add(2234)
empIds.add(1234)
empIds.add("sai")
console.log(empIds)

//Map ====q

let employeeDetails:Map<number,string> = new Map();

employeeDetails.set(1234,"Karthik");
employeeDetails.set(1235,"Kavya");
employeeDetails.set(1234,"Karthik Reddy");
employeeDetails.set(4689,"Karthik");
console.log(employeeDetails.size)
console.log(employeeDetails)


//===================Date =================


let currentDate : Date  = new Date();
console.log(currentDate)

