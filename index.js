// **************************** Code pour le Parallalax
let moon = document.getElementById('lune');
let sea = document.getElementById('mer');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let forest = document.getElementById('foret');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    moon.style.top = value * 1.3 + 'px';
    sea.style.top = value * 0.35 + 'px';
    forest.style.top = value * 0.05 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.2 + 'px';
    btn.style.marginTop = value * 1.2 + 'px';
    header.style.top = value * 0.85 + 'px';
})


// **************************** Code pour les compteurs
const rating = document.getElementsByClassName('rating')[0];
const block = document.getElementsByClassName('block');

for (let i = 0; i < 100; i++) {
    rating.innerHTML += "<div class='block'></div>";
    block[i].style.transform = "rotate("+3.6 * i +"deg)"
    // 360deg / 100 = 3.6deg
    block[i].style.animationDelay = `${i/40}s`;
}

const counter = document.querySelector('.counter');
counter.innerText = 0;
const target = +counter.getAttribute('data-target');

const NumberCounter = () => {
    const value = +counter.innerText;
    if (value < target){
        counter.innerText = Math.ceil(value + 1);
        setTimeout(() => {
            NumberCounter();
        },20)
    }
}
NumberCounter()