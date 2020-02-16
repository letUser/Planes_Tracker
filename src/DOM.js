import "./styles.css";
import {
  list,
  getData,
  regionSelector,
  region
} from "./logic.js";
import {
  logoAnim
} from "./animation.js";
import {
  introCreation,
  animStart
} from "./intro.js";

/* ЗАПУСК ИНТРО */
window.onload = function () {
  animStart();
  introCreation();
};

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
function headerCreation() {

  const cities = ["Москва", "Берлин", "Нью-Йорк", "Пекин"];

  let div = document.createElement("div");
  let navBar = document.createElement("div");
  let logoBar = document.createElement("div");
  let nav = document.createElement("select");
  let img = document.createElement("img");

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

  img.setAttribute('src', './img/logo.png');
  img.setAttribute('alt', 'logoImg');
  img.classList.add('logoImg');
  setTimeout(() => logoAnim(), 5000);

  for (let el of cities) {
    let city = document.createElement("option");
    city.classList.add("option");
    city.innerHTML = `<p>${el}</p>`;

    nav.append(city);
  }

  nav.onchange = function () {
    let name = this.value;

    for (let city of region) {
      if (name === city.name) {
        regionSelector(city.coords);
      }
    }
  };

  document.body.prepend(div);
  div.append(navBar);
  div.append(img);
  div.append(logoBar);
  navBar.append(nav);

  setTimeout(() => getData(), 8000);
  /* хедер появляется при запуске интро, поэтому внезависимости от скорости интернета
     будет пройдено именно заявленное в таймауте время. */
}

/* ФУНКЦИЯ СОЗДАНИЯ ДОМа */
let createTable = () => {
  /* ЕСЛИ ДАННЫЕ УЖЕ СУЩЕСТВУЮТ, ТО УДАЛИТЬ ИХ */
  if (document.getElementById("table")) {
    let table = document.getElementById("table");
    table.remove();
  }

  let div = document.createElement("div");
  let table = document.createElement("table");
  let tr = document.createElement("tr");

  div.setAttribute("id", "table");
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

/* РИСУЕМ АЛЕРТ КОННЕКШЕНА */
let alertShow = () => {
  if (document.getElementById("alert")) deleteAlert();

  let wrapper = document.createElement("div");
  let div = document.createElement("div");
  let bttn = document.createElement("input");
  let text = document.createElement("div");

  wrapper.setAttribute("id", "alert");
  div.classList.add("alertBox");

  bttn.classList.add("alertBttn");
  bttn.setAttribute("value", "Обновить");
  bttn.setAttribute("type", "button");

  text.classList.add("alertText");
  text.innerHTML = `<p>Интернет соединение потеряно.<br />Попробуйте отправить повторный запрос.</p>`;

  document.body.prepend(wrapper);
  wrapper.append(div);
  div.append(text);
  div.append(bttn);
};

/* УДАЛЯЕМ АЛЕРТ КОННЕКШЕНА */
let deleteAlert = () => {
  let alert = document.getElementById("alert");
  alert.remove();
};

export {
  createTable,
  alertShow,
  deleteAlert,
  headerCreation
};