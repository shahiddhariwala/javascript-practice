/*
 * Create the function factorial here
 */
const factorial = n =>
{
    let fact=1;
    while(n>0)
    {
        fact = fact * n;
        n--;
    }
    return fact;
}

 //IIFE Immediately invoked Function Expression
(function main() {
    const n = 5;
    
    console.log(factorial(n));
})();