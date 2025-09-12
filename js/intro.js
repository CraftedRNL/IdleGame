let ids = ['textGame','idleGame','placeHolder1','placeHolder2','placeHolder3','placeHolder4'];

document.getElementById('textGame').addEventListener('click',function(){
    resetAnim(1);

    setTimeout(function () {
        window.open('https://craftedrnl.github.io/FirstSeniorWebsite/')
    }, 1500)
    
})

document.getElementById('idleGame').addEventListener('click',function(){
    resetAnim(1);

    setTimeout(function () {
        window.open('game.html')
    }, 1500)
    
})

function resetAnim(x){
    let circ;
    for (let i = x; i < ids.length; i++) {
        circ = document.getElementById(ids[i]);
        circ.style.animation = 'none';
        circ.offsetHeight;
        circ.style.animation = '';
    }

    
}