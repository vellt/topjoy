const kep=document.getElementById('kep');
const hatter =document.getElementById('hatter');
const szoveg=document.getElementById('szoveg');

let zarva=true;

const uzik=[
    "A BELSŐ SZÁMÍT",
    "A CSILLAGOK FIGYELNEK",
    "A DOLGOK JÓL HALADNAK",
    "VIDÁMSÁG! :)",
    "VIDD VÉGIG AZ ÖTLETEIDET!", 
    "VIGYÉL EGY JÓ HÍRT!"
];

hatter.addEventListener('click', async function(){
    if(zarva===true){
        for (let index = 0; index < 11; index++) {
           kep.src=`images/bottlecap_${index}.png`;
           await new Promise(pr=>setTimeout(pr, 25));
        }
        const randomIndex=Math.floor(Math.random()*uzik.length); // [0,5]
        szoveg.textContent=uzik[randomIndex];
        zarva=false;
    }
    else{
        szoveg.textContent="";
        for (let index = 10; index>=0 ; index--) {
            kep.src=`images/bottlecap_${index}.png`;
            await new Promise(pr=>setTimeout(pr, 25));
        }
        zarva=true;
    }   
});
