const { promises } = require("fs");
async function readAndWrite() {
    //Чтение из файла
    let data = await promises.readFile("./input.txt", "utf8");

    console.log("Строка до записи:");
    console.log(data);

    //Переворачиваем строку
    let reverseData=data.split("").reverse().join("");

    //Записываем
    await promises.writeFile("./input.txt", reverseData);

    //Cчитываем обновленный файл
    let newData= await promises.readFile("./input.txt", "utf8");

    console.log("Строка после записи:");
    console.log(newData);
}

readAndWrite();