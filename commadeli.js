// Printing Array elements with Comma delimiters

const arr = ["h","o","l","a"];
let res="";
for(let s=0;s<arr.length;s++)
{
    res+=arr[s];
    if(s!=arr.length-1)
    {
        res+=",";
    }
}
console.log(res)