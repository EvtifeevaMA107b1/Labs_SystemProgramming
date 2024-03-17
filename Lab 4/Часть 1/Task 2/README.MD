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

    ![layout](res/Server.png) 

5. Отправляем `GET` запрос
    * Страница в браузере:
        ![layout](res/GetPage.png) 
    * Вывод в терминал:
        ![layout](res/getTerminal.png) 
6. Отправляем `POST` запрос через `POSTMAN`:

    ![layout](res/Postman.png) 
    
    * Вывод в терминал:

        ![layout](res/Post.png)
7. Итог добавления тела POST запроса в файл "input.txt"

    ![layout](res/итог.png) 
    
    




