window.addEventListener('load', ()=>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const animation = document.querySelector(".animation");
    const colors = [
        "#ec6767",
        "#f4c06f",
        "#78d0aa",
        "#626bb0",
        "#b361b4",
        "#303030"
    ];



    // Sounds

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    //Animate Function
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        animation.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 2s ease';
        bubble.addEventListener('animationend', function(){
            animation.removeChild(this);
        });
    }
});