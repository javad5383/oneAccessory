
//open menu in mobile size
export function hamburgerClick() {
    var spanBurger = document.querySelectorAll('#s');
    var HBurgerDiv = document.querySelector('#hamburger');
    var menu = document.querySelector('#menu');
    //if display-none
    if (HBurgerDiv.classList.contains('gap-2')) {
        menu.classList.remove('hidden');
        HBurgerDiv.classList.replace('gap-2', 'poppedUp');
        spanBurger[0].classList.replace('block', 'hidden');
        spanBurger[1].classList.add('rotate-45' ,'w-9');
        spanBurger[2].classList.replace('w-5', 'w-9');
        spanBurger[2].classList.add('-rotate-45');
        //if display
    } else {
        menu.classList.add('hidden');
        HBurgerDiv.classList.replace('poppedUp', 'gap-2');
        spanBurger[0].classList.replace('hidden', 'block');
        spanBurger[1].classList.remove('rotate-45');
        spanBurger[2].classList.replace('w-9', 'w-5');
        spanBurger[2].classList.remove('-rotate-45');
    }
}

