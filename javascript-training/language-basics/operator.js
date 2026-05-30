
let a = 10;
let b = 20;

console.log(a)
console.log(b)

//postincrement
console.log(a++)
console.log(b++)
//post increment and decrement of the value a and b
console.log(a)
console.log(b)

let c = 5;
let d = 10;
console.log(c)
console.log(d)
console.log(++c)
console.log(--d)


//======assignment operators===========

let i =10;
console.log(i)

console.log("Initial value of :" + i)

i += 10  //i = i+10  = 10+10  =20 
console.log("value of i after using += is " +  i)

i -= 10 //  i= i-10  = 20-10  = 10

console.log("value of i after using =- is " + i)

i *= 10 // i =i* 10 = 10* 10  =100
console.log("value of i after using *= is " + i)

i /=10 // i = i/10 = 100/10  = 10
console.log("value of i after using *= is ", + i)

i %= 10 // i = 1% 10 =
console.log("value of i after using % = " + 10 )


//comparision operator
//==  , === , != , > , < .  >= ,<= 
//== respresnts loose equality which compares only the data
//=== represents the strong equality which compares the data type along with the data

x = 10
y = 10
z = "10"
console.log(x==y) //true
console.log(x===z)//false as it compares data type as along with the data  x is number where as z is string
console.log(x==z)//true (Compares only dta 
console.log(x===y)//true
console.log(x != z)//false
console.log(x>z) //false
console.log(x>=y)//true
console.log(x<y)//false
console.log(x<=y)//true

//logical operator

console.log("===================Logical operators=============")

let p = 11
let q = 15

console.log( p>5 && q>10) //true && true = True
console.log(p>11 && q>10) // false && true =false

console.log(p>5 || q>10) //true || true = True
console.log(p>11 || q>10) // false || true = true
console.log(!(q<20)) //!(true)  =false

// ternary operator

console.log("===========ternary operator=================")
//syntax  condition ? value if true : value if false
let age = 16
let result = (age>=18) ? "eligile to vote": "not eligible to vote"  //ternary operator if the condition met then it will return the first option if not it will give 2nd option
console.log(result)
