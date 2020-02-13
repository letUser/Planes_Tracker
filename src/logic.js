import "./styles.css";
import {
  createTable
} from "./DOM.js";
import {
  animStart
} from "./intro.js";

const airport = {
  coordX: (55.410307).toFixed(3),
  coordY: (37.902451).toFixed(3),
}; //координаты Домодедово (по условию задачи)

export let list = []; //массив объектов

/* НАЗНАЧАЕМ URL */
const url =
  "https://data-live.flightradar24.com/zones/fcgi/feed.js?bounds=56.84,55.27,33.48,41.48";

/* ФУНКЦИЯ ОБРАБОТКИ ФЕТЧА*/
async function getData() {
  try {
    let response = await fetch(url);
    let data = await response.json(); //В URL любезно положили объект, поэтому json
    list.splice(0, list.length); //очищаем массив

    /* ПРОХОДИМ ПО МАССИВУ ЗНАЧЕНИЙ И УБИРАЕМ 2 ПЕРВЫХ ЗНАЧЕНИЯ */
    for (let props of Object.values(data).slice(2)) {
      let plane = {
        //объект каждого самолета
        coord: `${props[1].toFixed(3)}°, ${props[2].toFixed(3)}°`,
        speed: `${props[5]*1.852} км/ч`,
        course: `${props[3]}°`,
        height: `${props[4]} м`,
        route: `${props[11]} → ${props[12]}`,
        flight: `${props[13]}`,
        distance: 0,
      };
      list.push(plane); //добавляем объект в массив
    }

    distanceCalc(); //считаем дистацию объектов

    list.sort((a, b) => a.distance - b.distance); //сортируем по дистанции от аэропорта

    createTable(); //вызываем создание ДОМа

    setTimeout(() => getData(), 4000); //вызываем Фетч через 4 сек
  } catch {
    console.log(
      "Обновление невозможно. Пожалуйста, проверьте Интернет соединение"
    );
    setTimeout(() => getData(), 5000);
  }
}

/* РАСЧЕТ ПО ДЛИНЕ ОРТОДРОМИИ ЧЕРЕЗ МЕРЕДИАНУ */
let distanceCalc = () => {
  for (let i = 0; i <= (list.length - 1); i++) {
    let coordsPlane = list[i].coord.split(','); //получаем строковое значение координат
    for (let i = 0; i <= (coordsPlane.length - 1); i++) { //мутируем массив
      let str = coordsPlane[i].trim().replace(/°/g, ''); //убираем все ° и пробелы
      coordsPlane.splice(i, 1, +str); //вставляем как число
    }

    let cosS = ((Math.sin(airport.coordX) * Math.sin(coordsPlane[0])) + //считаем S в угловой мере
      (Math.cos(airport.coordX) * Math.cos(coordsPlane[0])) *
      Math.cos(coordsPlane[1] - airport.coordY));
    let acosS = Math.acos(cosS);
    let distance = acosS * 111.3; //умножаем на мередиану
    list[i].distance = +distance.toFixed(2); //добавляем в объект текущую дистанцию
  }
};

/* ВЫЗОВ ФЕТЧА ПРИ ЗАГРУЗКЕ СТРАНИЦЫ */
window.onload = function () {
  setTimeout(() => getData(), 7000);
  animStart();
};
