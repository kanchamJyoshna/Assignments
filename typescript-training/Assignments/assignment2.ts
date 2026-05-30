//conditional statements

let creditScore: number =  750 ;
let income : number = 50000 ;
let emplyementStatus : boolean ;
let debtToInc: number = 39 ;

if (creditScore>750){
    console.log("The loan is automautically approved")
}else if(creditScore> 650 && creditScore<=750){
    console.log("checking for the addition details")
    if (income >= 50000) {
        console.log("checking for the employment status");
        if (emplyementStatus = true){
            console.log("checking for the Debt to income ratio");
            if (debtToInc < 40){
                console.log("The loan is approved")
            }else{
                console.log("The loan is denied")
            }
        }else{
            console.log("The loan is denied")
        }
    }else {
        console.log("The loan is denied")
    }
}else{
    console.log("The loan is denied")
}



