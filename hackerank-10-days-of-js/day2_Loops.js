function vowelsAndConsonants(s) {
    // const vowels = ['a','e','i','o','u'];
    // let hashset = new Set(vowels);
    let hashset = new Set(['a','e','i','o','u']);
    let ch;
    for(ch of s)
    {
        if(hashset.has(ch))
        {
            console.log(ch);
        }
    }
    for(ch of s)
    {
        if(!hashset.has(ch))
        {
            console.log(ch);
        }
    }
}


(function main() {
    const s = "javascriptloops";
    
    vowelsAndConsonants(s);
})();