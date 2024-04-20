function OnlyEven ({arr})
{
    const evenArr=[];
    for (let i=0;i<arr.length;i++)
    {
        if(arr[i]%2===0)
        {
            evenArr.push(arr[i]);
        }
    }
    return(
        <p>{evenArr.join(', ')}</p>
    
    );
}
export default OnlyEven 