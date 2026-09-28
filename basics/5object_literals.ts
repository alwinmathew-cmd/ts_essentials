type User = {    //custom type for object literals,   could choose to use interface here as well
    name:string,    
    id:number,
    isOnline:boolean
}

const details:User = {
    name:"George",
    id:100,
    isOnline:true
}

console.log(details.name);