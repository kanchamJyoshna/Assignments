
//primitive data type  (immutable  --whih is not changable)
//non primitive data type (mutable --which can be changed)

//immutable
let a = 10
a+10

console.log(a)

//mutable

let obj = {
    "name" : "Jyoshna",
    "gender": "female"

}

obj.age = 35

console.log(obj)


//Primitive data type
//number

let num1 = 10
let num2 = 20.5
console.log(num1)
console.log(typeof num1)
console.log(typeof(num2))

//-----string---------------
//we can store the data in single quotes, double quotes and backticks

let employeeName  = "Jy'o'shna"  //Aleays prefer to use "" for string
let location  = 'Ban"g"alore'
let company = `Test`

console.log(employeeName)
console.log(location)
console.log(company)

console.log(typeof employeeName)
console.log(typeof location)
console.log(typeof company)


console.log("EmployeeName is Jyoshna and their location is Bangalore")
console.log("EmployeeName is "+ "Jyoshna"+"and their location is"+"Bangalore")
console.log("EmployeeName is"+ employeeName + " and their location is "+ location)
//using backtick of variables
console.log(`Employee name is ${employeeName} and their location is ${location}` ) //Best  way is this to use

//------boolean ---------------

let x = 10 ;
let y = 4 ;
z = x>y ;
console.log(z)
console.log(typeof z)


//----undefined ---------

// here we have declared a variable but we havent assigned any value to it

let designation;
console.log(designation)
console.log(typeof designation)

//--------Null --------


//Here we have decalred the value and assigned with null or empty value

let salary = 10000000
console.log(salary);
console.log(typeof salary)
salary = null ;
console.log(salary);
console.log(typeof salary)

//----object

//object represents the collection of key value pair

let person = {

    "name" : "jyo",
    "age" : 35 ,
    "gender" : "Female",
    "visa" : true,
    "empID" : 2468,
    "address" : {
        "city" :"Bangalore",
        "state" : "karnataka"
    }
}

//1st way of accessing data
console.log(person.name)
console.log(person.address.city)

//2nd way of accessing data

console.log(person["name"])
console.log(person.address["city"])
 console.log(person)

 //================================array======================================

 //collection of data   ...array represents a list of values 

 let fruits = ["apples","mango","sapota"]
 let price = [100 , 80 ,60]
 let fruitsAndPrices = ["apples",100,"mango",80,"sapota",60]

 //accessing the data
 console.log(fruits[1])//will give mango
 console.log(fruitsAndPrices[3])//will give mango price


 //==========================================set ============================================


 let empIds = new Set();
 empIds.add(1234);
 empIds.add(4568);
 empIds.add(1234); //as this is the duplicate value so it wont add to set
 console.log(empIds.size)
 console.log(empIds)


 //======================Map ===========================


 //MAp is a collect which is the compbination of key and value ...here key should be unique but value can be duplicate

 let employeeDetails = new Map();
employeeDetails.set(1234,"Jyoshna");
employeeDetails.set(4568,"sai");
employeeDetails.set(1234,"Jyoshna Kancham");
employeeDetails.set(2468,"sai");

console.log(employeeDetails.size)
console.log(employeeDetails)

//============================Date ===================================

let currentDate = new Date();
console.log(currentDate)

let currentYear = currentDate.getFullYear();
console.log(currentYear)

let currentMonth = currentDate.getMonth();
console.log(currentMonth+1)

let currentDay = currentDate.getDate();
console.log(currentDay);

let currentHours = currentDate.getHours();
console.log(currentHours)

let currentMinutes = currentDate.getMinutes();
console.log(currentMinutes)

let currentSeconds = currentDate.getSeconds();
console.log(currentSeconds)

let currentDayOfWeek = currentDate.getDay();
console.log(currentDayOfWeek)
