import "./styles.css";
import {
  list
} from "./logic.js";
import {
  introCreation
} from "./intro.js";
import {
  logoAnim,
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
  const cities = ["Мир", "Москва", "Берлин", "Нью-Йорк", "Пекин"];

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

  document.body.prepend(div);
  div.append(navBar);
  div.append(img);
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

/* РИСУЕМ АЛЕРТ КОННЕКШЕНА */
let alertShow = () => {
  if (document.getElementsByClassName("alert").length > 0) {
    deleteAlert();
  }

  let wrapper = document.createElement("div");
  let div = document.createElement("div");
  let bttn = document.createElement("input");
  let icon = document.createElement("img");
  let text = document.createElement("div");

  wrapper.classList.add("alert");
  div.setAttribute("id", "alertBox");

  bttn.classList.add("alertBttn");
  bttn.setAttribute("value", "Обновить");
  bttn.setAttribute("type", "button");

  icon.classList.add("alertIcon");
  icon.setAttribute("src", "./img/refresh-icon.png");

  text.classList.add("alertText");
  text.innerHTML = `<p> Интернет соединение потеряно. <br /> Попробуйте отправить повторный запрос. </p>`;

  document.body.append(wrapper);
  wrapper.append(div);
  div.append(text);
  div.append(icon);
  div.append(bttn);
};

/* УДАЛЯЕМ АЛЕРТ КОННЕКШЕНА */
let deleteAlert = () => {
  let alertBox = document.getElementById("alertBox");
  alertBox.parentNode.remove();
};

export { createTable, alertShow, deleteAlert };

introCreation(); //вызываем анимацию интро
