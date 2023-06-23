document.addEventListener('DOMContentLoaded', function(){
    const btnScrollRight = document.getElementById('btn-right');
    const btnScrollLeft = document.getElementById('btn-left');
    const Shows = document.getElementById('shows');

    btnScrollRight.onclick = function () {
        document.getElementById('shows').scrollTo({
            left: Shows.scrollLeft + 426,
            behavior: 'smooth'
          });
    };

    btnScrollLeft.onclick = function () {
      document.getElementById('shows').scrollTo({
        left: Shows.scrollLeft - 400,
        behavior: 'smooth'
      });
    };

    const buttons = document.querySelectorAll('[data-tab-btn]');

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(btn){
            const target = (btn.target.dataset.tabBtn);
            const tab = document.querySelector(`[data-tab-id=${target}]`)
            hideTabs();
            tab.classList.add('tabs__shows--is-active')
            removeBtnActive();
            btn.target.classList.add('tabs__btns__btn--is-active')

        })
    }
})

function hideTabs(){
    const tabsContainer =  document.querySelectorAll('[data-tab-id]');
    
    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('tabs__shows--is-active');
    }
}

function removeBtnActive(){
    const buttons = document.querySelectorAll('[data-tab-btn]');
    
    for(let i = 0; i < buttons.length; i++){

        buttons[i].classList.remove('tabs__btns__btn--is-active');
    }
}