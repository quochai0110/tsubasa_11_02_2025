/* hiển thị 20 số trong dãy fibonaci
    _ dãy fibonaci là gì?
    0 1 1 2 3 5 8 13 21........ 
*/
// hiển thị các số fibonaci < 100
let n1=0;
let n2=1;
let nextItem;
let sum=0;
 for(let i=0; i<20; i++ ){
    console.log(n1);
    sum+=n1;
    nextItem= n1+n2;
    n1=n2;
    n2= nextItem;

 }
 console.log("sum", sum);
 