import "./styles.css";
import {
  list
} from "./logic.js";
import {
  animPlane
} from "./animation.js";

/* ШАПКА ТАБЛИЦЫ */
let headerTable = [
  `Координаты`,
  `Скорость`,
  `Курс`,
  `Высота`,
  `Маршрут`,
  `Рейс`
];


/* СОЗДАЕМ HEADER */
(function () {
  let div = document.createElement('div');
  let bar = document.createElement('ul');
  let nav = document.createElement('select');
  let logo = document.createElement('li');

  let airports = [
    'Выберите аэропорт',
    'Домодедово',
  ];

  document.body.prepend(div);

  bar.classList.add('nav');
  div.append(bar);

  logo.innerHTML = `<p> Plane Tracker </p>`;
  bar.classList.add('logo');
  bar.append(logo);

  nav.setAttribute('name', 'Аэропорт');
  bar.append(nav);

  for (let airport of airports) {
    let option = document.createElement('option');
    option.innerHTML = `<p>${airport}</p>`;
    nav.append(option);
  }

})();


/* ФУНКЦИЯ СОЗДАНИЯ ДОМа */
let createTable = () => {
  let table = document.querySelector("table");

  /* ЕСЛИ ДАННЫЕ УЖЕ СУЩЕСТВУЮТ, ТО УДАЛИТЬ ИХ */
  if (document.getElementsByClassName("table").length > 0) {
    table.parentNode.remove();
  }

  let div = document.createElement("div");
  table = document.createElement("table");
  let tr = document.createElement("tr");

  div.classList.add("table");
  document.body.append(div);
  div.append(table);
  table.append(tr);

  /* РИСУЕМ ШАПКУ */
  for (let i = 0; i <= headerTable.length - 1; i++) {
    let th = document.createElement("th");
    th.innerHTML = `<p>${headerTable[i]}</p>`;
    tr.append(th);
  }

  /* РИСУЕМ ТАБЛИЦУ */
  for (let plane of list) {
    let tr = document.createElement("tr");
    table.append(tr);

    for (let value of Object.values(plane).slice(0, 6)) { //прячем дистанцию
      let td = document.createElement("td");
      td.innerHTML = `<p>${value}</p>`;
      tr.append(td);
    }
  }
}

animPlane(); //вызываем анимацию лого

export {
  createTable
};