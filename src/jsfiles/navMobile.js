let menue = document.getElementById('menu');
let navHidden = document.getElementById('navHidden')
//Adding Event listner to know when menue button is pressed
menue.addEventListener('click', () => {
    if (navHidden.classList.contains('hidden')) {
        navHidden.classList.remove('hidden');
    } else {
        navHidden.classList.add('hidden');
    }
});

let hideContent = document.getElementsByClassName("vis");

if (window.matchMedia("(min-width: 768px)").matches) {
    console.log("Less Then 768px");
    for (let i = 0; i < hideContent.length; i++) {
        hideContent[i].classList.remove('hidden');
    }
}    