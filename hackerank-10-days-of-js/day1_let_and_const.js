(function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    let r = 2.6;
    const PI = Math.PI;
    // Print the area of the circle:
    console.log(PI * r * r);
    // Print the perimeter of the circle:
    console.log(PI * 2 * r);
    try {
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch (error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
})();

/* 
21.237166338267002
16.336281798666924
You correctly declared 'PI' as a constant.
 */