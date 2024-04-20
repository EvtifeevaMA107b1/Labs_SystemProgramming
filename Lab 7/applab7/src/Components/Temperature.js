function Temperature({t})
{   let color='red'
    if (t<0)
    {
        color='blue'
    }
    else
    {
       color='red'
    }
    return(
        <p style={{'color': color}}>{t}</p>
    );
}
export default Temperature