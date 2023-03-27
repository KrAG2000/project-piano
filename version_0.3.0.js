let store = [0, 1];

function dynamicFibonacci(n){
    if(n < 2) return store[n];
    if(n in store) return store[n];
    else{
        store[n] = dynamicFibonacci(n-1) + dynamicFibonacci(n-2);
        return store[n];
    }
}

function main() {
    let n = prompt("Enter a number: ");
    let res = dynamicFibonacci(n);
    document.getElementById("fibonacci").innerHTML = res;
    // console.log(res);
}