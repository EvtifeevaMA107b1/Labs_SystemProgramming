/*Написать функцию, которая проверяет, является ли строка палиндромом:
*/

function palindrome(str1)
{
    let strCheck=str1.split(" ").join("").toLowerCase();
    let strRev=str1.split(" ").join("").toLowerCase();
    strRev=strRev.split("").reverse().join("");

    console.log (`строка исxодная: ${strCheck}`);
    console.log (`строка перевернутая: ${strCheck}`);


    if(strCheck===strRev)
    {
        return true;
    }
    return false;
}

let str1 = "Не гни папин ген";

if(palindrome(str1))
{
    console.log(`${str1} - это палиндром`);
}
else
{
    console.log(`${str1} - это не палиндром`);
}
