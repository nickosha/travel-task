console.log('Оценка - 65 баллов \nВыполненные пункты: \nВёрстка соответствует макету. Ширина экрана 390px +48 \nНет полосы прокрутки +15 \nНа ширине экрана 390рх и меньше реализовано адаптивное меню +2 \n(при ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка +2)')

const burgerButton = document.querySelector('.burger-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.mobile-menu-button');
const mobileLinks = document.querySelectorAll('.mobile-menu-link');
const slider = document.querySelector('.slider');
const paginationButtons = document.querySelectorAll('.pagination__item');
const loginButton = document.querySelector('.header-button');
const body = document.querySelector('body');
const popup = document.querySelector('.pop-up');
const popupContent = document.querySelector('.pop-up__content');
const signIn = document.querySelectorAll('.sign-in');
const signUp = document.querySelectorAll('.sign-up');
const popupToggle = document.querySelector('.pop-up-toggle');
const popupForm = document.querySelector('.pop-up__form')

burgerButton.addEventListener('click', () => {
    mobileMenu.style.transform = 'translateX(-175px)'
})

closeButton.addEventListener('click', () => {
    mobileMenu.style.transform = 'translateX(175px)'
})

mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
        mobileMenu.style.transform = 'translateX(175px)'
    })
})

slider.addEventListener('click', (event) => {
    paginationButtons.forEach((elem) => elem.classList.remove('activ'))
    if (event.target.classList.contains('slider__item1')) {
        slider.style.transform = "translateX(540px)"
        paginationButtons[0].classList.add('activ')
    }
    if (event.target.classList.contains('slider__item2')) {
        slider.style.transform = "translateX(0)"
        paginationButtons[1].classList.add('activ')
    }
    if (event.target.classList.contains('slider__item3')) {
        slider.style.transform = "translateX(-540px)"
        paginationButtons[2].classList.add('activ')
    }
})

paginationButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        paginationButtons.forEach((elem) => elem.classList.remove('activ'))
        paginationButtons[index].classList.add('activ')
        if (index === 0) {
            slider.style.transform = "translateX(540px)"
        }
        if (index === 1) {
            slider.style.transform = "translateX(0)"
        }
        if (index === 2) {
            slider.style.transform = "translateX(-540px)"
        }
    })
})

loginButton.addEventListener('click', () => {
    popup.classList.remove('hidden');
    popupContent.classList.add('show');
    body.classList.add('stopscroll')

})

popup.addEventListener('click', (event) => {
    if (event.target.classList.contains('pop-up')) {
        popup.classList.add('hidden')
        popupContent.classList.remove('show')
        body.classList.remove('stopscroll')
        signIn.forEach((elem) => {
            elem.classList.remove('hidden')
        })
        signUp.forEach((elem) => {
            elem.classList.add('hidden')
        })
    }
})

popupToggle.addEventListener('click', () => {
    signIn.forEach((elem) => {
        elem.classList.toggle('hidden')
    })
    signUp.forEach((elem) => {
        elem.classList.toggle('hidden')
    })
})

popupForm.addEventListener('submit', (event) => {
    event.preventDefault()
    alert(`e-mail: ${popupForm.mail.value}
  password: ${popupForm.password.value}`)
    popupForm.reset()
  })