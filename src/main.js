document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-btn]');
    
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