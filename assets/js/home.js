const headerSlides = [
    {
        "ref" : "#Home",
        "text" : "Home"
    },
    {
        "ref" : "#Skills",
        "text" : "Skills"
    },
    {
        "ref" : "#Work",
        "text" : "Work"
    },
    {
        "ref" : "#Contact",
        "text" : "Contact"
    },
]

const header = document.querySelector("header");
const nbSlides = headerSlides.length;
const aHeader = document.createElement ("a");
const ulHeader = document.createElement ("ul");
const liHeader = document. createElement ("li");