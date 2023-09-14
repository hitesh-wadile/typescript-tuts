function addtwo(num:number){
    return num + 5;
}

function getUpper(val : string){
    return val.toUpperCase()
}

function loginIn(name : string, email : string,isPaid : boolean = false){}


// addtwo("5") // Error
addtwo(5) 

// function getValue(val : number) : string{
//     if(val > 5){
//         return true
//     }
//     return ""
// }

const getHello = (val : string) : string =>{
    return ""
}

// function consoleError(errMsg : string): void{
//     console.log(errMsg);
    
// }

function handleError(errMsg : string) : never{
    throw new Error(errMsg)
}