# Лаба 5. Настройка инфраструктуры. Сборка проекта и установка зависимостей
- [`Task`](#task)
- [`Отчет`](#отчет)
## Task
> Для лабы: <a href="https://github.com/goryachkinama/web-lectures/blob/main/src/lab_7_webpack.md">Настройка инфраструктуры. Сборка проекта и установка зависимостей</a>

### Задание по проекту TODO-list:

0. Открыть в своей TODO-list как проект (можно выполнить нижеперечисленные шаги на пустом проекте, но позже придется переносить в него все файлы из TODO-list)
1. Проверить и установить, если требуется NodeJS (проверить через "node -v" в терминале IDE)
2. Сгенерить/создать package.json ("npm init -y")
3. Поставить и удалить библиотеку lodash ("npm i lodash", "npm un lodash"): убедиться, что работает установка библиотек
4. Поставить Webpack и создать webpack.config.js
5. Особое внимание к структуре проекта (!) Файлы js, css,и html нужно складывать четко соблюдая дерево папок из примера.
   Если что-то не будет совпадать, Webpack не отработает
7. В package.json прописать скрипты для старта и сборки проекта:
  "start": "webpack-dev-server --config webpack.config.js",
  "build": "webpack --config webpack.config.js"
8. Убедиться, что скрипты работают ("npm run start", "npm run build"), проект стартует на http://localhost:8080
9. В файле .gitignore указать игнорируемые при коммите папки

## Отчет

1. Проверяем наличие node

 ![layout](./resources/node%20ver.PNG) 

2. Создаем `package.json` через 
    ```
    npm init -y
    ```
     ![layout](./resources/npm%20init.PNG)

3. Ставим библиотеку `lodash`

   ![layout](./resources/lodash.PNG)    

4. Удаляем библиотеку `lodash`

   ![layout](./resources/un%20lodash.PNG)

5. Создаем новый js файл `utils` 
    ![layout](./resources/new%20js.PNG)

    *  Структура файлов:

        ![layout](./resources/struct.PNG)

6. Устанавливаем необхожимые библиотеки webpack
    * Библиотека 1:
        ```
        npm i -D webpack webpack-cli webpack-dev-server
        ```

        ![layout](./resources/bib%201.PNG)

     * Библиотека 2:
        ```
        npm i -D webpack-merge babel-loader clean-webpack-plugin
        ```

        ![layout](./resources/bib%202.PNG)
    
     * Библиотека 3:
        ```
        npm i -D copy-webpack-plugin html-webpack-plugin @babel/core
        ```

        ![layout](./resources/bib%203.PNG)

7. В package.json прописываем скрипты для старта и сборки проекта

     ![layout](./resources/package%20json%20update.PNG)

8. Создаем `./webpack.config.js`

     ![layout](./resources/webpack.PNG)

9. `npm run start` -
    * Консоль:
     ![layout](./resources/%D0%BF%D0%BE%D0%B4%D0%BD%D1%8F%D0%BB%D0%B8.PNG)
    * Браузер:
     ![layout](./resources/%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80.PNG)  

10. `npm run build` -
    * Консоль:
     ![layout](./resources/build.PNG)

    * Новая сбилденная папка `build`:

        ![layout](./resources/new%20final.PNG)  
