function reverseString(s) {
    try
    {
       s =  s.split("").reverse().join("");
    }
    catch(e)
    {
        console.log(e.message);
    }
    finally{
        console.log(s);
    }
}


(function main() {
    // const s = "1234";
    const s = Number(1234);
    reverseString(s);
})();