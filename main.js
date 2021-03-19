// tady je místo pro náš program

let odstavec = document.querySelector('.odstavec');

let tlacitko = document.querySelector('button');

function tucnyText() {
    odstavec.classList.add('tucny-text');
}

function normalniText() {
    odstavec.classList.remove('tucny-text');
}


/*----------------------------------------------------------
ÚKOL 1
----------------------------------------------------------*/

function cervenyText() {
    odstavec.classList.toggle('cerveny-text');
}


/*----------------------------------------------------------
ÚKOL 2
----------------------------------------------------------*/

function vetsiText() {
    odstavec.classList.add('vetsi-text');
}


function zvetsitPismo() {
    let velikostPisma = parseInt(odstavec.style.fontSize);
    let vetsiPismo = velikostPisma + 1;
    return odstavec.style.fontSize = 'vetsiPismo';
    console.log(vetsiPismo); //test
}



// od Filipa
// onclick="zvetsitPismo('.odstavec', 1);"
// parseInt(element.style.fontSize);


/*----------------------------------------------------------
ÚKOL 3
----------------------------------------------------------*/

/*Funkce, která přehraje předaný prvek
*
* @param {string} elementSelector
*/

function prehraj(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.play();
    
}

/* 
Funkce, která pozastaví předaný prvek
*
* @param {string} elementSelector
*/

function zastav(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.pause();
    return true;
}

/* 
Funkce, která ztiší hlasitost předaného prvku
*
* @param {string} elementSelector
*/

function ztisit(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 0.2;
}

/* 
Funkce, která nastaví poloviční hlasitost předaného prvku
*
* @param {string} elementSelector
*/

function normal(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 0.5;
}

/* 
Funkce, která zesílí hlasitost předaného prvku
*
* @param {string} elementSelector
*/

function zesil(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 1;
}

/* 
Funkce, která vrátí na začátek předaný prvek a začne hrát, i pokud je prvek zastavený
*
* @param {string} elementSelector
*/


function odzacatku(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.currentTime = 0;
    if (zastav(elementSelector) === true) {
        prehraj(elementSelector);
    }    
}
