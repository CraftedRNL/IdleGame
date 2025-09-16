let points = 200;
let clickMult = 1;
let idleMult = 1;
let idleCost = 200;
const idleUpgrade = document.getElementById('idleUpgrade');
document.getElementById('monster').addEventListener('click', function(){
    points = points + 1 * clickMult;
    addPoints();
})

idleUpgrade.addEventListener('click', function(){
    if(points >= 100){
        points -= 100;
        setInterval(addIdle, 1000);
    }
    idleUpgrade.style.opacity = '.1';
    idleUpgrade.style.pointerEvents = 'none';
    idleUpgrade.style.cursor = 'none';
})
document.getElementById('idleMore').addEventListener('click', function(){
    if(points >= idleCost){
        points -= idleCost;
        idleCost= Math.floor(Math.pow(idleCost, 1.01));
        idleMult = idleMult *1.5;
        document.getElementById('idleCost').innerHTML = '[' + idleCost + ']';
    }
    addPoints();
    return;
    
})



function addIdle() {
    points = Math.floor(points + idleMult);
    addPoints();
}

function addPoints(){
document.getElementById('points').innerHTML = points;
}
