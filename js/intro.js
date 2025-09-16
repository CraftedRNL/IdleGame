let ids = ['codeHS','physics','textGame','idleGame','placeHolder3','placeHolder4'];


document.getElementById('codeHS').addEventListener('mouseover',function(){
    transparentBack(0);

})
document.getElementById('codeHS').addEventListener('mouseout',function(){
    back();

})


document.getElementById('physics').addEventListener('mouseover',function(){
    transparentBack(1);

})
document.getElementById('physics').addEventListener('mouseout',function(){
    back();

})

document.getElementById('textGame').addEventListener('mouseover',function(){
    transparentBack(2);

})
document.getElementById('textGame').addEventListener('mouseout',function(){
    back();

})
document.getElementById('idleGame').addEventListener('mouseover',function(){
    transparentBack(3);

})
document.getElementById('idleGame').addEventListener('mouseout',function(){
    back();

})


document.getElementById('codeHS').addEventListener('click',function(){
    resetAnim(1);

    setTimeout(function () {
        window.open('https://codehs.com/sandbox/craftedrnl/game20')
    }, 1500)
    
})
document.getElementById('physics').addEventListener('click',function(){
    resetAnim(2);

    setTimeout(function () {
        window.open('https://craftedrnl.github.io/PhysicsGame/')
    }, 1500)
    
})

document.getElementById('textGame').addEventListener('click',function(){
    resetAnim(3);

    setTimeout(function () {
        window.open('https://craftedrnl.github.io/FirstSeniorWebsite/')
    }, 1500)
    
})

document.getElementById('idleGame').addEventListener('click',function(){
    resetAnim(4);

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

function transparentBack(x){
    let circ;
    for (let i = 0; i < ids.length; i++) {
        if(i!==x){
            circ = document.getElementById(ids[i]);
        circ.style.background = 'none';
        }
        
    }
}
function back(){
    let circ;
    for (let i = 0; i < ids.length; i++) {
        circ = document.getElementById(ids[i]);
        circ.style.background = '';
        
    }
}