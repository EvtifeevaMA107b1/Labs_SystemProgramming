# Задание по NPM
- [`Task`](#task)
- [`Отчет`](#отчет)
## Task
> Для лабы: <a href="https://github.com/goryachkinama/web-lectures/blob/main/src/lab_7_npm.md">Задание по NPM</a>

---

* Инициализировать проект
* Поставить библиотеку lodash
* Подключить её и отсортировать массив объектов по полю age (можно использовать метод sortBy):
```js
const users = [
  { user: 'fred',   age: 48 },
  { user: 'barney', age: 36 },
  { user: 'fred',   age: 40 },
  { user: 'barney', age: 34 }
];
```
* Вызвать написанный код через npm run (используется поле script).

## Отчет

1. Инициализируем проект через терминал в VS Code с помощью команды
    ```
    npm init
    ```
    ![layout](https://github.com/EvtifeevaMA107b1/Labs_SystemProgramming/blob/main/Lab%204/Часть%202/res/init.PNG) 

2. Ставим библиотеку `lodash` с помощью команды
    ```
    npm i lodash
    ```
     ![layout](https://github.com/EvtifeevaMA107b1/Labs_SystemProgramming/blob/main/Lab%204/Часть%202/res/lodash.PNG)

3. В `index.js` подключаем "lodash". Используя её  метод "sortBy", сортируем массив

     ![layout](https://github.com/EvtifeevaMA107b1/Labs_SystemProgramming/blob/main/Lab%204/Часть%202/res/sort.PNG)
    

4. И в `script` добавляем команду для запуска `start`

    ![layout](https://github.com/EvtifeevaMA107b1/Labs_SystemProgramming/blob/main/Lab%204/Часть%202/res/start.PNG) 

5. Запускаем:
   
    ![layout](https://github.com/EvtifeevaMA107b1/Labs_SystemProgramming/blob/main/Lab%204/Часть%202/res/terminal.PNG) 





