/*Написать функцию intersect(arrA, arrB), принимающую на вход два массива и возвращающую пересечение значений этих массивов.*/

function intersect(arrA, arrB)
{
    let set_A=new Set(arrA);
    let set_B=new Set(arrB);

    let uniq_arrA = Array.from(set_A);
    let uniq_arrB = Array.from(set_B);
    let result=new Array();
    console.log(uniq_arrA);
    console.log(uniq_arrB);

    for(let i=0;i<uniq_arrA.length;i++)
    {
        for(let j=0;j<uniq_arrB.length;j++)
        {
            if(uniq_arrA[i]==uniq_arrB[j])
            {
                console.log(uniq_arrA[i]);
                result.push(uniq_arrA[i]);
                break;
            }
        }
    }

    console.log(result);
}


let arrA=[1,2,3,4,5,5];
let arrB=[3,4,5,6,7,3,2,8,9]

intersect(arrA,arrB);