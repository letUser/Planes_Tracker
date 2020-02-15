import "./styles.css";
import {
  createTable,
  deleteAlert,
  alertShow,
} from "./DOM.js";


export {
  getData
};

const city = {
  World: {
    coordX: 1,
    coordY: 1
  },
  Moscow: {
    coordX: (55.410307).toFixed(3),
    coordY: (37.902451).toFixed(3)
  },
  Berlin: {
    coordX: (52.52437).toFixed(3),
    coordY: (13.41053).toFixed(3)
  },
  NewYork: {
    coordX: (40.71427).toFixed(3),
    coordY: (-74.00597).toFixed(3)
  },
  Pekin: {
    coordX: (39.9075).toFixed(3),
    coordY: (116.39723).toFixed(3)
  },
};

export let list = []; //массив объектов

/* НАЗНАЧАЕМ URL */
const url =
  "https://data-live.flightradar24.com/zones/fcgi/feed.js";

/* ФУНКЦИЯ ОБРАБОТКИ ФЕТЧА*/
async function getData() {
  try {
    let response = await fetch(url);
    let data = await response.json(); //В URL любезно положили объект, поэтому json
    takeData(data);
  } catch (e) {
    alertShow();
    setTimeout(() => getData(), 5000);
  }
}

/* СОЗДАЕМ ОБЪЕКТЫ ДОМа */
let takeData = data => {
  list.splice(0, list.length); //очищаем массив

  /* ПРОХОДИМ ПО МАССИВУ ЗНАЧЕНИЙ И УБИРАЕМ 2 ПЕРВЫХ ЗНАЧЕНИЯ */
  for (let props of Object.values(data).slice(2)) {
    let plane = {
      //объект каждого самолета
      coord: `${props[1].toFixed(3)}°, ${props[2].toFixed(3)}°`,
      speed: `${(props[5]*1.852).toFixed(0)} км/ч`, //переводим узлы в км/ч
      course: `${props[3]}°`,
      height: `${(props[4]*0.3048).toFixed(0)} м`, //переводим футы метры
      route: `${props[11]} → ${props[12]}`,
      flight: `${props[13]}`,
      distance: 0,
    };
    list.push(plane); //добавляем объект в массив
  }

  distanceCalc(); //считаем дистацию объектов

  list.sort((a, b) => a.distance - b.distance); //сортируем по дистанции от аэропорта

  if (document.getElementById("alert")) deleteAlert();
  //проверка наличия окна об ошибке

  createTable(); //вызываем создание ДОМа

  setTimeout(() => getData(), 3200); //вызываем Фетч через 3,2 сек
};

/* РАСЧЕТ ПО ДЛИНЕ ОРТОДРОМИИ ЧЕРЕЗ МЕРЕДИАНУ */
let distanceCalc = () => {
  for (let i = 0; i <= (list.length - 1); i++) {
    let coordsPlane = list[i].coord.split(','); //получаем строковое значение координат
    for (let i = 0; i <= (coordsPlane.length - 1); i++) { //мутируем массив
      let str = coordsPlane[i].trim().replace(/°/g, ''); //убираем все ° и пробелы
      coordsPlane.splice(i, 1, +str); //вставляем как число
    }

    let cosS = ((Math.sin(city.World.coordX) * Math.sin(coordsPlane[0])) + //считаем S в угловой мере
      (Math.cos(city.World.coordX) * Math.cos(coordsPlane[0])) *
      Math.cos(coordsPlane[1] - city.World.coordY));
    let acosS = Math.acos(cosS);
    let distance = acosS * 111.3; //умножаем на мередиану
    list[i].distance = +distance.toFixed(2); //добавляем в объект текущую дистанцию
  }
};