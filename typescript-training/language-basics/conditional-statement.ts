
// example of if else conditional statement

let percentage: number = 35 ;

if (percentage >=90) {

    console.log("Grade  A")
} else if (percentage >= 80){
    console.log("Grade B")
} else if (percentage >=70 ){
    console.log("Grade C")
}else {
    console.log("Grade D")
}

//example of nested if else conditional statement

let percent : number = 90 ;

if (percent >= 90 ){

    console.log("Grade A");
    if (percent >=95){
        console.log("hey buddy you will get the gold medal") ;
    } else {
       console.log(" hey buddy you will get the silver medal")

    }

} else if (percent >= 80) {
    console.log("Grade B") ;
} else if (percent >= 70 ) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}

// =====switch case =================

let env:string = "prod"

switch(env){
    case "dev": {
        console.log ("Launch the dev  application with dev.amazon.com")
        break;//break keyword is used to exit from the switch case block  when the condition /case is matched 
    }
    case "qa" : {
        console.log( "Launch the qa application with qa.amazon.com")
        break;
    }
    case "uat":{
        console.log("Launch the UAT application with uat.amazon.com ")
        break;
    }
    case "prod":{
        console.log("Launch the prod applicattion with amazon.com")
        break;
    }
    default : {
        console.log("please provide the correct environment")
    }
}