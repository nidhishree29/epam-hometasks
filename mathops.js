function mathOps(op,va1,va2)
{
    if(op==="+")
    {
        console.log(va1+va2);
        return va1+va2;
    }
    else if(op==="-")
    {
        console.log(va1-va2);
        return va1-va2;
    }
    else if(op==="*")
    {
        console.log(va1*va2);
        return va1*va2;
    }
    else if(op==="/")
    {
        console.log(va1/va2);
        return va1/va2;
    }
    else
    {
        return "I can only perform +,-,*,/";
    }
}

console.log(mathOps("+",5,6))