/*Написать функцию, возвращающую название первого репозитория на github.com по имени пользователя*/


function getFirstRep(name)
{
    return fetch(`https://api.github.com/users/${name}`)
      .then(response => {
            return response.json();
        })
        .then(user => {//url репозиториев поль
            let repUrl = user.repos_url;
            return fetch(repUrl);
        })
        .then(response => {
            return response.json();
        })
        .then(rep => {
            let firstRep = rep[0];

            return firstRep.name;
        });
}

let name= 'EvtifeevaMA107b1';

getFirstRep(name)
    .then(repName=>
        {
            console.log("Название: "+ repName);
        });
