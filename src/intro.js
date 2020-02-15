import "./styleIntro.css";
import anime from "animejs";

export {
    introCreation,
};

let sky = document.createElement("img");
sky.setAttribute('src', './img/sky.png');
sky.setAttribute('alt', 'sky');
sky.classList.add('sky');

let clouds = document.createElement("div");
clouds.classList.add('clouds');

let cloud1 = document.createElement("img");
cloud1.setAttribute('src', './img/cloud1.png');
cloud1.setAttribute('alt', 'cloud');
cloud1.classList.add('cloud1');

let cloud2 = document.createElement("img");
cloud2.setAttribute('src', './img/cloud2.png');
cloud2.setAttribute('alt', 'cloud');
cloud2.classList.add('cloud2');

let cloud3 = document.createElement("img");
cloud3.setAttribute('src', './img/cloud3.png');
cloud3.setAttribute('alt', 'cloud');
cloud3.classList.add('cloud3');

let cloud4 = document.createElement("img");
cloud4.setAttribute('src', './img/cloud4.png');
cloud4.setAttribute('alt', 'cloud');
cloud4.classList.add('cloud4');

let cloud5 = document.createElement("img");
cloud5.setAttribute('src', './img/cloud1.png');
cloud5.setAttribute('alt', 'cloud');
cloud5.classList.add('cloud5');

let cloud6 = document.createElement("img");
cloud6.setAttribute('src', './img/cloud4.png');
cloud6.setAttribute('alt', 'cloud');
cloud6.classList.add('cloud6');

let cloud7 = document.createElement("img");
cloud7.setAttribute('src', './img/cloud2.png');
cloud7.setAttribute('alt', 'cloud');
cloud7.classList.add('cloud7');

let cloud8 = document.createElement("img");
cloud8.setAttribute('src', './img/cloud3.png');
cloud8.setAttribute('alt', 'cloud');
cloud8.classList.add('cloud8');

let cloud9 = document.createElement("img");
cloud9.setAttribute('src', './img/cloud4.png');
cloud9.setAttribute('alt', 'cloud');
cloud9.classList.add('cloud9');

let cloud10 = document.createElement("img");
cloud10.setAttribute('src', './img/cloud3.png');
cloud10.setAttribute('alt', 'cloud');
cloud10.classList.add('cloud10');

let cloud11 = document.createElement("img");
cloud11.setAttribute('src', './img/cloud3.png');
cloud11.setAttribute('alt', 'cloud');
cloud11.classList.add('cloud11');

let cloud12 = document.createElement("img");
cloud12.setAttribute('src', './img/cloud2.png');
cloud12.setAttribute('alt', 'cloud');
cloud12.classList.add('cloud12');

let cloud13 = document.createElement("img");
cloud13.setAttribute('src', './img/cloud3.png');
cloud13.setAttribute('alt', 'cloud');
cloud13.classList.add('cloud13');

let img = document.createElement('img');
img.setAttribute('src', './img/paper_plane.png');
img.setAttribute('alt', 'plane');
img.classList.add('plane');


/* СОЗДАЕМ INTRO */
function introCreation() {
    document.body.style.position = 'fixed';
    document.body.style.overflow = 'hidden';
    document.body.style.pointerEvents = 'none';

    setTimeout(() => interactionAccess(), 4000);

    let interactionAccess = () => {
        document.body.style.position = '';
        document.body.style.overflow = '';
        document.body.style.pointerEvents = '';
    };

    document.body.append(sky);
    document.body.append(clouds);
    clouds.append(cloud1);
    clouds.append(cloud2);
    clouds.append(cloud3);
    clouds.append(cloud4);
    clouds.append(cloud5);
    clouds.append(cloud6);
    clouds.append(cloud7);
    clouds.append(cloud8);
    clouds.append(cloud9);
    clouds.append(cloud10);
    clouds.append(cloud11);
    clouds.append(cloud12);
    clouds.append(cloud13);
    document.body.append(img);

    setTimeout(() => img.remove(), 4200); // удаляем элемент
    setTimeout(() => sky.remove(), 4200); //удаляем элемент
    setTimeout(() => clouds.remove(), 4200); //удаляем элемент

    anime({
        targets: ".header",
        opacity: 1,
        duration: 1500,
        delay: 4000,
        easing: 'easeInOutSine',
    });

    anime({
        targets: '.plane',
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
                duration: 1000,
            },
            {
                value: 0,
                delay: 2000,
                duration: 4000,
            }
        ]
    });

    anime({
        targets: '.sky',
        opacity: {
            value: 0,
            duration: 9000,
            delay: 3500,
        }
    });

    anime({
        targets: '.clouds',
        translateX: {
            value: -200,
            duration: 24000,
        },
        opacity: {
            value: 0,
            duration: 9000,
            delay: 3000,
        }
    });

    anime({
        targets: '.cloud1, .cloud10',
        translateX: {
            value: -100,
            duration: 24000,
        },
    });
}