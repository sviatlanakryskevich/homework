const content = document.querySelector('.collapsible__content');
const actionHide = document.querySelector('.collapsible__action--hidden');
const actionVisible = document.querySelector('.collapsible__action--visible');

if (content && actionHide && actionVisible) {
    content.style.overflow = 'hidden';
    actionVisible.setAttribute('hidden', 'hidden');

    const animContent = content
        .animate({ height: ["0px", "auto"] }, { duration: 250, fill: "both", easing: 'ease-in-out' });

    animContent.pause();

    const button = document.querySelector('.collapsible__button');

    if (button) {
        button.addEventListener("click", () => {
            if (actionHide.hasAttribute('hidden')) {
                actionHide.removeAttribute('hidden');
                actionVisible.setAttribute('hidden', 'hidden');
            } else {
                actionHide.setAttribute('hidden', 'hidden');
                actionVisible.removeAttribute('hidden');
            }
            if (animContent.playState === "paused") {
                animContent.play();
            } else {
                animContent.reverse();

            }
        });
    }

    animContent.onfinish = (evt) => {
        console.log(
            "animation completed",
            evt.currentTime === 0 ? "closed" : "opened"
        );
    };
}