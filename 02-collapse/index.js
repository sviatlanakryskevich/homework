const content = document
    .getElementsByClassName("collapsible__content")[0]

content.style.overflow = 'hidden';

const anim = content
    .animate({ height: ["0px", "auto"] }, { duration: 250, fill: "both", easing: 'ease-in-out' });

anim.pause();

document.getElementsByClassName("collapsible__button")[0].addEventListener("click", () => {
    if (anim.playState === "paused") {
        anim.play();
    } else {
        anim.reverse();
    }
});

anim.onfinish = (evt) => {
    console.log(
        "animation completed",
        evt.currentTime === 0 ? "closed" : "opened"
    );
};