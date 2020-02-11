import "./styles.css";
import {
  list
} from "./logic.js";
import anime from 'animejs';

/* ШАПКА ТАБЛИЦЫ */
let headerTable = [
  `Координаты`,
  `Скорость`,
  `Курс`,
  `Высота`,
  `Маршрут`,
  `Рейс`
];

/* ФУНКЦИЯ СОЗДАНИЯ ДОМа */
export default function createTable() {
  let table = document.querySelector("table");

  /* ЕСЛИ ДАННЫЕ УЖЕ СУЩЕСТВУЮТ, ТО УДАЛИТЬ ИХ */
  if (document.getElementsByClassName("table").length > 0) {
    table.parentNode.remove();
  }

  let div = document.createElement("div");
  table = document.createElement("table");
  let tr = document.createElement("tr");

  div.classList.add("table");
  document.body.prepend(div);
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

/* АНИМАЦИЯ САМОЛЕТИКА */
let img = document.createElement('img');
img.setAttribute('src', './img/paper_plane.png');
img.setAttribute('alt', 'plane');
document.body.append(img);

setTimeout(() => anim(), 500);
setTimeout(() => img.style.display = "none", 16000); //скрываем элемент

let anim = () => {
  anime({
    targets: img,
    translateX: {
      value: 3050,
      duration: 19000,
    },
    rotate: {
      value: 65,
      duration: 8000,
    },
    translateY: {
      value: 1400,
      duration: 19000,
    },
    rotateY: {
      delay: 500,
      value: -40,
      duration: 4000,
    },
    scaleX: {
      value: -1,
      delay: 4000,
      duration: 10000,
    },
    opacity: [{
        value: 1,
        duration: 6600,
      },
      {
        value: 0,
        delay: 8000,
        duration: 6000,
      }
    ]
  });
}