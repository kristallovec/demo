"use strict";

const number0Films = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {

    count: number0Films,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

const a = prompt('Odin iz prosmotrenix filmov?', ''),
      b = prompt('Ozenite film?', ''),
      c = prompt('Odin iz prosmotrenix filmov?', ''),
      d = prompt('Ozenite film?', '');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);
 