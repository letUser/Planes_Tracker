import "./styles.css";
import anime from "animejs";

function logoAnim() {
    anime({
        targets: ".logoImg",
        opacity: 1,
        duration: 2000,
        delay: 4000,
    });

    anime({
        targets: ".logo",
        delay: 3000,
        opacity: 1,
        duration: 3000,
    });
}

function downloadAnim() {
    anime({
        targets: ".downloadImg",
        opacity: [{
            value: 1,
            duration: 1000,
        }, {
            value: 0,
            duration: 2000,
            delay: 500
        }],
        rotate: {
            value: -1000,
            duration: 5000,
        },
        easing: 'easeInOutCirc'
    });
}

export {
    logoAnim,
    downloadAnim
};