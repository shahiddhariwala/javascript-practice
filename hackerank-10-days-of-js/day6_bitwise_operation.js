function getMaxLessThanK(n,k)
{
    let max= Number.NEGATIVE_INFINITY;
   for(let i = 1  ; i< n ; i++)
   {
      for(let j = i+1  ; j<= n ; j++)
        {
            if((i&j)>max && (i&j)<k)
            {
                max = (i&j);
            }
        }
   }
   return max;
}

 console.log(getMaxLessThanK(5, 2));
 console.log(getMaxLessThanK(8, 5));
 console.log(getMaxLessThanK(2, 2));