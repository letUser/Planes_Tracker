import "./styles.css";
import anime from "animejs";

/* АНИМАЦИЯ САМОЛЕТИКА */
function animPlane() {
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
    };
}

/* АНИМАЦИЯ ПОЯВЛЕНИЯ */
function animStart() {
    anime({
        targets: "body",
        opacity: 1,
        duration: 1500,
        easing: 'easeInOutSine',
    });
}

export {
    animPlane,
    animStart
};