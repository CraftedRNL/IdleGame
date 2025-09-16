let points = 0;
let clickMult = 1;
let idleMult = 1;
let idleCost = 200;
let clickCost = 100;
let crit = false;
let critChanceVal = 0;
let critCost = 100;
let critDmgVal = 1.5;
let critDmgCost = 250;
let idleMult2 = 1;
let idleCost2 = 500;
let totalPoints = 0;
const critChance = document.getElementById('critChance');
const idleUpgrade = document.getElementById('idleUpgrade');
const idleUpgrade2 = document.getElementById('idleUpgrade2');
const idleMore2 = document.getElementById('idleMore2');
const critMore = document.getElementById('critMore');
const idleMore = document.getElementById('idleMore');
const critDmg = document.getElementById('critDmg');

addPoints();


document.getElementById('monster').addEventListener('click', function(){
    let rng = Math.ceil(Math.random() * 100);
    if(crit && rng < critChanceVal){
        points = points + 1 * clickMult * critDmgVal;
        totalPoints = totalPoints + 1 * clickMult * critDmgVal;
        let color = setInterval(function(){
            document.getElementById('points').style.color = 'gold';
        }, 100);

        setTimeout(function(){
            document.getElementById('points').style.color = 'white'; 
            clearInterval(color);
        }, 500);

        addPoints();
    } else{
        totalPoints = totalPoints + 1 * clickMult;
        points = points + 1 * clickMult;
        addPoints();
    }

    
})

idleUpgrade.addEventListener('click', function(){
    if(points >= 100){
        points -= 100;
        setInterval(addIdle, 1000);
        idleUpgrade.style.opacity = '.1';
    idleUpgrade.style.pointerEvents = 'none';
    idleUpgrade.style.cursor = 'none';

    idleMore.style.opacity = '1';
    idleMore.style.pointerEvents = 'auto';
    idleMore.style.cursor = 'pointer';
    addPoints();
    }
    
})
document.getElementById('idleMore').addEventListener('click', function(){
    if(points >= idleCost){
        points -= idleCost;
        idleCost= Math.ceil(Math.pow(idleCost, 1.01));
        idleMult = Math.ceil(idleMult *1.5);
        document.getElementById('idleCost').innerHTML = '[' + idleCost + '] Points';
        document.getElementById('idleMult').innerHTML = idleMult;
        addPoints();
    }
    
})
document.getElementById('clickOne').addEventListener('click', function(){
    if(points >= clickCost){
        
        points -= clickCost;
        clickCost= Math.ceil(Math.pow(clickCost, 1.05));
        clickMult = Math.ceil(clickMult *1.5);
        document.getElementById('clickCost').innerHTML = '[' + clickCost + '] Points';
        document.getElementById('clickMult').innerHTML = clickMult;
        addPoints();
    }
})
document.getElementById('critChance').addEventListener('click', function(){
    if(points >= 300){
        crit = true;
        points -= 300;
        critChanceVal = 1;
    
    critChance.style.opacity = '.1';
    critChance.style.pointerEvents = 'none';
    critChance.style.cursor = 'none';

    critMore.style.opacity = '1';
    critMore.style.pointerEvents = 'auto';
    critMore.style.cursor = 'pointer';

    critDmg.style.opacity = '1';
    critDmg.style.pointerEvents = 'auto';
    critDmg.style.cursor = 'pointer';
    addPoints();
    }
})
document.getElementById('critMore').addEventListener('click', function(){
    if(points >= critCost){
        points -= critCost;
        critCost= Math.ceil(Math.pow(critCost, 1.1));
        critChanceVal = critChanceVal + 1;
        document.getElementById('critCost').innerHTML = '[' + critCost + '] Points';
        document.getElementById('critChanceVal').innerHTML = critChanceVal + '%';
        addPoints();
    }
})
document.getElementById('critDmg').addEventListener('click', function(){
    if(points >= critDmgCost){
        points -= critDmgCost;
        critDmgCost= Math.ceil(Math.pow(critDmgCost, 1.15));
        critDmgVal = critDmgVal + .5;
        document.getElementById('critDmgCost').innerHTML = '[' + critDmgCost + '] Points';
        document.getElementById('critDmgVal').innerHTML = critDmgVal + 'x';
        addPoints();
    }
})



document.getElementById('idleMore2').addEventListener('click', function(){
    if(points >= idleCost2){
        points -= idleCost2;
        idleCost2= Math.ceil(Math.pow(idleCost2, 1.05));
        idleMult2 = Math.ceil(idleMult2 * 1.5);
        document.getElementById('idleCost2').innerHTML = '[' + idleCost2 + '] Points';
        document.getElementById('idleMult2').innerHTML = idleMult2;
        addPoints();
    }
    
})
idleUpgrade2.addEventListener('click', function(){
    if(points >= 1000){
        points -= 1000;
        setInterval(addIdle2, 1000);
        idleMult2 = 1;
        
        idleUpgrade2.style.opacity = '.1';
    idleUpgrade2.style.pointerEvents = 'none';
    idleUpgrade2.style.cursor = 'none';

    idleMore2.style.opacity = '1';
    idleMore2.style.pointerEvents = 'auto';
    idleMore2.style.cursor = 'pointer';

    addPoints();
    }
    
})
function addIdle() {
    points = points + idleMult;
    totalPoints = totalPoints + idleMult;
    addPoints();
}
function addIdle2() {
    points = points + idleMult2;
    totalPoints = totalPoints + idleMult2;
    addPoints();
}

function addPoints(){
document.getElementById('points').innerHTML = Math.ceil(points);
document.getElementById('totalPoints').innerHTML = totalPoints;
}
