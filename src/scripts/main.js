document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-btn]');
    const questions = document.querySelectorAll('[data-faq-question]');
    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const scollPos = window.scrollY;
        
        if(scollPos < heroHeight){
            HideHeaderBtns();
        }else{
            ShowHeaderBtns();
        }
    })


    //Shows Section tabs- Change the shows images
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(btn){
            const target = (btn.target.dataset.tabBtn);
            const tab = document.querySelector(`[data-tab-id=${target}]`)
            hideTabs();
            tab.classList.add('shows__list--is-active')
            removeBtnActive();
            btn.target.classList.add('shows__tabs__btn--is-active')

        })
    }

    //Faq section accordion
    for(let i = 0;i < questions.length; i++){
        questions[i].addEventListener('click', openCloseQuestions)
    }
})

function hideTabs(){
    const tabsContainer =  document.querySelectorAll('[data-tab-id]');
    
    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

function removeBtnActive(){
    const buttons = document.querySelectorAll('[data-tab-btn]');
    
    for(let i = 0; i < buttons.length; i++){

        buttons[i].classList.remove('shows__tabs__btn--is-active');
    }
}

function openCloseQuestions(element){
    const openClass = 'faq__questions__item--is-open';
    const fatherElement = element.target.parentNode;

    fatherElement.classList.toggle(openClass);
}

function HideHeaderBtns(){
    const header = document.querySelector('.header');
    header.classList.add('header--is-hidden')
}
function ShowHeaderBtns(){
    const header = document.querySelector('.header');
    header.classList.remove('header--is-hidden')
}