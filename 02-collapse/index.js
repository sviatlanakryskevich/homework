const content = document.querySelector('.collapsible__content');
console.log(content);
if (content) {
    content.style.overflow = 'hidden';

    const anim = content
        .animate({ height: ["0px", "auto"] }, { duration: 250, fill: "both", easing: 'ease-in-out' });

    anim.pause();

    const button = document.querySelector('.collapsible__button');
    const actionHidden = document.querySelector('.collapsible__action--hidden');
    const actionVisible = document.querySelector('.collapsible__action--visible');

    console.log(button);
    console.log(actionHidden);
    console.log(actionVisible);
    if (button && actionHidden && actionVisible) {
        actionHidden.style.visibility = 'hidden';
        actionVisible.style.visibility = 'initial';
        button.addEventListener("click", () => {
            if (anim.playState === "paused") {
                anim.play();
                actionHidden.style.visibility = 'initial'
                actionVisible.style.visibility = 'hidden';
            } else {
                anim.reverse();
                actionHidden.style.visibility = 'hidden';
                actionVisible.style.visibility = 'initial';

            }
        });
    }

    anim.onfinish = (evt) => {
        console.log(
            "animation completed",
            evt.currentTime === 0 ? "closed" : "opened"
        );
    };
}