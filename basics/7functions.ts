function addNum(n1:number = 5,n2:number = 10):number{
    return n1+n2;
}
let result = addNum(2,3);
console.log(result);

//Void type:
function log(msg:string | number):void{
    console.log(msg)//  CANNOT use return keyword for result here, must print result if result of type : void
}

log('hi');

//for keyword arguments:
function addNumDestructured({ n1 = 5, n2 = 10 }: { n1?: number; n2?: number } = {}): number {
    let result = n1 + n2;
    return result;
}

let res = addNumDestructured({n2:100,n1:50});
console.log(res);
