/*Написать функцию, которая проверяет, являются ли две строки анаграммой:*/
function isAnagramm(st1,st2)
{
    let str1=st1.toLowerCase();
    let str2=st2.toLowerCase();

    if(str1.length!=str2.length)
    {
        return false;
    }
   
    str1=str1.split("");
    str2=str2.split("");

    str1=str1.sort();
    str2=str2.sort();

    str1=str1.join("");
    str2=str2.join("");

    if(str1===str2)
    {
        return true;
    }
    return false;

}

let str1="Лунь";
let str2="нуль";

if(isAnagramm(str1,str2))
{
    console.log(`${str1} и ${str2} - это анаграмма`)
}
else{
    console.log(`${str1} и ${str2} - это не анаграмма`)
}
