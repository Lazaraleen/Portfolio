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
    header.style.top = value * 0.5 + 'px';
})