document.querySelector(".dm").addEventListener('click', function (e) {
    if (document.body.style.backgroundColor == 'black') {
        document.body.style.backgroundColor="white";
        document.body.style.backgroundImage=`url('images/CJYAEO.jpg')`;
        document.querySelector(".dm").innerText = "DARK MODE";
        let arr = document.querySelectorAll(".drum");
        arr.forEach(function (element) {
            element.classList.remove("drumDark");
        });
    }
    else {
        document.body.style.backgroundImage="none";
        document.body.style.backgroundColor = "black";
        document.querySelector(".dm").innerText = "THEME MODE";
        document.querySelector('footer').style.color = "white";
        let arr = document.querySelectorAll(".drum");
        arr.forEach(function (element) {
            element.classList.add("drumDark");
        });
    }
});

document.addEventListener('keypress', function (event) {
    playsound(event.key);
});

let arr = document.querySelectorAll('.drum');
for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener('click', function () {
        playsound(this.innerText);
    });
}

function playsound(x) {
    x = x.toUpperCase();
    switch (x) {
        case 'A':
            let audio1 = new Audio('sound/A.mp3');
            animation('A');
            audio1.play();
            break;
        case 'W':
            let audio2 = new Audio('sound/W.mp3');
            animation('W');
            audio2.play();
            break;
        case 'J':
            let audio3 = new Audio('sound/J.mp3');
            animation('J');
            audio3.play();
            break;
        case 'K':
            let audio4 = new Audio('sound/K.mp3');
            animation('K');
            audio4.play();
            break;
        case 'L':
            let audio5 = new Audio('sound/L.mp3');
            animation('L');
            audio5.play();
            break;
        case 'G':
            let audio6 = new Audio('sound/G.mp3');
            animation('G');
            audio6.play();
            break;
        case 'H':
            let audio7 = new Audio('sound/H.mp3');
            animation('H');
            audio7.play();
            break;
        case 'S':
            let audio8 = new Audio('sound/S.mp3');
            animation('S');
            audio8.play();
            break;
    }
}

function animation(x) {
    document.querySelector(`#${x}`).classList.add("anima");
    setTimeout(function() {
         document.querySelector(`#${x}`).classList.remove("anima");
    }, 20);
}