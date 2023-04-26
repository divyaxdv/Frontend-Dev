const App={
    $:{
        act : document.querySelector('[data-id="menu"]');
        menuBtn : document.querySelector('[data-id="menu-btn"]');
        menuItems  : document.querySelector('[data-id="menu-items"]');
        resetBtn: document.querySelector('[data-id="resetbtn"]');
        newRoundBtn : document.querySelector('[data-id="nrbtn"]');
        squares: document.querySelectorAll('[data-id="square"]');
    init(){
        App.$.menu.addEventListener("click",(event)=>{ 
        App.$.menuItems.classList.toggle("hidden");
        });

        App.$.resetBtn.addEventListener("click",(event)=>{ 
            console.log('reset the game')
        });

        App.$.newRoundBtn.addEventListener("click",(event)=>{ 
            console.log('Add new round')
        });

        App.$.squares.forEach(square=>{ 
            square.addEventListener('click', event=>{
                console.log('Square with id ${event.target.id}was clicked');
            });
    });   
},


};

window.addEventListener('load, App.init');