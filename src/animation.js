import "./styles.css";
import anime from "animejs";

function logoAnim() {
    anime({
        targets: ".header",
        opacity: 1,
        duration: 2000,
    });

    anime({
        targets: ".logoImg",
        opacity: 1,
        duration: 2000,
        delay: 2000,
    });

    anime({
        targets: ".logo",
        delay: 1000,
        opacity: 1,
        duration: 3000,
    });
}

export {
    logoAnim
};