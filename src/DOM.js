import "./styles.css";
import {
  list
} from "./logic.js";
import {
  animPlane,
  introCreation
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
(function headerCreation() {
  let cities = ["Москва", "Берлин"];

  let div = document.createElement("div");
  let navBar = document.createElement("div");
  let logoBar = document.createElement("div");
  let nav = document.createElement("select");

  div.classList.add("header");
  navBar.classList.add("navBar");

  nav.setAttribute("name", "citySelector");
  nav.classList.add("citySelector");

  logoBar.classList.add("logo");
  logoBar.innerHTML = `<p>Planes Tracker</p>`;

  let city = document.createElement("option");
  city.classList.add("disabledOption");
  city.innerHTML = `<p>Выберите город</p>`;
  city.setAttribute("disabled", "true");

  nav.prepend(city);

  for (let el of cities) {
    let city = document.createElement("option");
    city.classList.add("option");
    city.innerHTML = `<p>${el}</p>`;

    nav.append(city);
  }

  document.body.prepend(div);
  div.append(navBar);
  div.append(logoBar);
  navBar.append(nav);
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
};

export {
  createTable
};

introCreation(); //вызываем анимацию интро
animPlane(); //вызываем анимацию лого