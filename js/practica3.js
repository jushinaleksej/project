"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?", "");
    }
}

start();

const propertiesFilms  = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
              b = prompt("На сколько оцените его?", "");
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            propertiesFilms.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--; //Если условие не выполнено вернуться на один шаг цикла назад
        }
    
    }
}

//rememberMyFilms();

function detectPersonalLevel() {
    if (propertiesFilms.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (propertiesFilms.count >= 10 && propertiesFilms.count < 30) {
        console.log("Вы класический зритель");
    } else if (propertiesFilms.count >=30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

//detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(propertiesFilms);
    }
}

showMyDB(propertiesFilms.privat);

//console.log(propertiesFilms);

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        propertiesFilms.genres[i - 1] = genre;
    }
}
writeYourGenres();