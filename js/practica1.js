"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже смотрели?", "");

const propertiesFilms  = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const film1 = prompt("Один из последних просмотренных фильмов?", "");
const rating1 = prompt("На сколько оцените его?", "");

const film2 = prompt("Один из последних просмотренных фильмов?", "");
const rating2 = prompt("На сколько оцените его?", "");

propertiesFilms.movies[film1] = rating1;
propertiesFilms.movies[film2] = rating2;

console.log(propertiesFilms);