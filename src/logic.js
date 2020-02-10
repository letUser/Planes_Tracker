import createTable from "./DOM.js";

const airport = `55.410307°, 37.902451°`; //координаты Домодедово (по условию задачи)

export let list = []; //массив объектов

/* НАЗНАЧАЕМ URL */
const url =
  "https://data-live.flightradar24.com/zones/fcgi/feed.js?bounds=56.84,55.27,33.48,41.48";

/* ИНТЕРВАЛ ЗАПРОСОВ */
setInterval(() => getData(), 4000);

/* ФУНКЦИЯ ОБРАБОТКИ ФЕТЧА*/
async function getData() {
  let response = await fetch(url);
  let data = await response.json(); //В URL любезно положили объект, поэтому json
  list.splice(0, list.length); //очищаем массив

  /* ПРОХОДИМ ПО МАССИВУ ЗНАЧЕНИЙ И УБИРАЕМ 2 ПЕРВЫХ ЗНАЧЕНИЯ */
  for (let props of Object.values(data).slice(2)) {
    let plane = {
      //объект каждого самолета
      coord: `${props[1]}°, ${props[2]}°`,
      speed: `${props[5]} km/h`,
      course: `${props[3]}°`,
      height: `${props[4]} m`,
      route: `${props[11]} → ${props[12]}`,
      flight: `${props[13]}`
    };
    list.push(plane); //добавляем объекты в массив
  }

  createTable(); //вызываем создание ДОМа
}
