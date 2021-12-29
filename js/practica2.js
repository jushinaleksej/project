"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже смотрели?", "");

const propertiesFilms  = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (propertiesFilms.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (propertiesFilms.count >= 10 && propertiesFilms.count < 30) {
    console.log("Вы класический зритель");
} else if (propertiesFilms.count >=30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(propertiesFilms);