import "./styles.css";
import anime from "animejs";

function logoAnim() {
    anime({
        targets: ".logoImg",
        opacity: 1,
        duration: 2000,
        delay: 1000,
    });

    anime({
        targets: ".logo",
        opacity: 1,
        duration: 2000,
    });
}

export {
    logoAnim,
};