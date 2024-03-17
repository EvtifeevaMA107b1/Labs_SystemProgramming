# Node.js Задача 2
- [`Task`](#task)
- [`Отчет`](#отчет)
## Task
> Для лабы: <a href="https://github.com/goryachkinama/web-lectures/blob/main/src/lab_7_nodejs.md">Задания по NodeJS</a>

Написать сервер, который при запросе GET / отправляет содержимое некоего файла на диске (см. предыдущую задачу). POST / добавляет в файл тело запроса (body).

## Отчет

1. Создадим файл `index.js`
2. Создадим файл `input.txt` (из него будем считывать и в него записывать)
3. Для работы с файлами используем встроенную библиотеку `fs`. 
    Скрипт для задачи представлен в файле `index.js`

4. Поднимаем сервер:

    ![layout](https://github.com/EvtifeevaMA107b1/Labs_SystemProgramming/blob/main/Lab%204/Часть%201/Task%202/res/Server.PNG) 

5. Отправляем `GET` запрос
    * Страница в браузере:
        ![layout](https://github.com/EvtifeevaMA107b1/Labs_SystemProgramming/blob/main/Lab%204/Часть%201/Task%202/res/GetPage.PNG) 
    * Вывод в терминал:
        ![layout](https://github.com/EvtifeevaMA107b1/Labs_SystemProgramming/blob/main/Lab%204/Часть%201/Task%202/res/getTerminal.PNG) 
6. Отправляем `POST` запрос через `POSTMAN`:

    ![layout](https://github.com/EvtifeevaMA107b1/Labs_SystemProgramming/blob/main/Lab%204/Часть%201/Task%202/res/Postman.PNG) 
    
    * Вывод в терминал:

        ![layout](https://github.com/EvtifeevaMA107b1/Labs_SystemProgramming/blob/main/Lab%204/Часть%201/Task%202/res/Post.PNG)
7. Итог добавления тела POST запроса в файл "input.txt"

    ![layout](https://github.com/EvtifeevaMA107b1/Labs_SystemProgramming/blob/main/Lab%204/Часть%201/Task%202/res/итог.PNG) 
    
    




