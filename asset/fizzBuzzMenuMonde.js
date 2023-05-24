/*--------------------
Vars
--------------------*/
let progress = 50
let startX = 0
let active = 0
let isDown = false
var mondeParcouru = new Boolean([]);
mondeParcouru=[true,true,false,false,false,false,false,false,false,false,false];
var tAdress = new String ([11]);
tAdress = ['https://jydellon.github.io/FizzBuzz/html/menuTraining.html','https://jydellon.github.io/FizzBuzz/html/menuMonde01.html','https://jydellon.github.io/FizzBuzz/html/menuMonde01.html','https://jydellon.github.io/FizzBuzz/html/menuMonde01.html','https://jydellon.github.io/FizzBuzz/html/menuMonde01.html','https://jydellon.github.io/FizzBuzz/html/menuMonde01.html','https://jydellon.github.io/FizzBuzz/html/menuMonde01.html','https://jydellon.github.io/FizzBuzz/html/menuMonde01.html','https://jydellon.github.io/FizzBuzz/html/menuMonde01.html','https://jydellon.github.io/FizzBuzz/html/menuMonde01.html','https://jydellon.github.io/FizzBuzz/html/menuMonde1.html'];
tImage  = ["./image/lesDixMondes/00.jpg","./image/lesDixMondes/01.jpg","./image/lesDixMondes/01.png","./image/lesDixMondes/02.jpg","./image/lesDixMondes/02.png","./image/lesDixMondes/03.jpg","./image/lesDixMondes/03.png","./image/lesDixMondes/04.jpg","./image/lesDixMondes/04.png","./image/lesDixMondes/05.jpg","./image/lesDixMondes/05.png","./image/lesDixMondes/06.jpg","./image/lesDixMondes/06.png","./image/lesDixMondes/07.jpg","./image/lesDixMondes/07.png","./image/lesDixMondes/08.jpg","./image/lesDixMondes/08.png","./image/lesDixMondes/09.jpg","./image/lesDixMondes/09.png","./image/lesDixMondes/10.jpg","./image/lesDixMondes/10.png"];
var valeur=0;
var indiceUn;var indiceDeux;var indiceTrois;var indiceQuatre;var indiceCinq;var indiceSix;var indiceSept;var indiceHuit;var indiceNeuf;var indiceDix;

// document.body.style.backgroundImage = "url('img_tree.png')";
//-------------------------------------------------------------------------

if (indiceUn == undefined || indiceUn == null){
  localStorage.setItem('indiceUn',1);
  indiceUn=localStorage.getItem('indiceUn');
}else {
  indiceUn=localStorage.getItem('indiceUn');
}

if (indiceDeux == undefined || indiceDeux == null){
  localStorage.setItem('indiceDeux',4);
  indiceDeux=localStorage.getItem('indiceDeux');
}else {
  indiceDeux=localStorage.getItem('indiceDeux');
}
if (localStorage.getItem("monde")==2){mondeParcouru[2] = true}

if (indiceTrois == undefined || indiceTrois == null){
  localStorage.setItem('indiceTrois',6);
  indiceTrois=localStorage.getItem('indiceTrois');
}else {
  indiceTrois=localStorage.getItem('indiceTrois');mondeParcouru[3] = true
}

if (indiceQuatre == undefined || indiceQuatre == null){
  localStorage.setItem('indiceQuatre',8);
  indiceQuatre=localStorage.getItem('indiceQuatre');
}else {
  indiceQuatre=localStorage.getItem('indiceQuatre');mondeParcouru[4] = true
}

if (indiceCinq == undefined || indiceCinq == null){
  localStorage.setItem('indiceCinq',10);
  indiceCinq=localStorage.getItem('indiceCinq');
}else {
  indiceCinq=localStorage.getItem('indiceCinq');mondeParcouru[5] = true
}

if (indiceSix == undefined || indiceSix == null){
  localStorage.setItem('indiceSix',12);
  indiceSix=localStorage.getItem('indiceSix');
}else {
  indiceSix=localStorage.getItem('indiceSix');mondeParcouru[6] = true
}

if (indiceSept == undefined || indiceSept == null){
  localStorage.setItem('indiceSept',14);
  indiceSept=localStorage.getItem('indiceSept');
}else {
  indiceSept=localStorage.getItem('indiceSept');mondeParcouru[7] = true
}

if (indiceHuit == undefined || indiceHuit == null){
  localStorage.setItem('indiceHuit',16);
  indiceHuit=localStorage.getItem('indiceHuit');
}else {
  indiceHuit=localStorage.getItem('indiceHuit');mondeParcouru[8] = true
}

if (indiceNeuf == undefined || indiceNeuf == null){
  localStorage.setItem('indiceNeuf',18);
  indiceNeuf=localStorage.getItem('indiceNeuf');
}else {
  indiceNeuf=localStorage.getItem('indiceNeuf');mondeParcouru[9] = true
}

if (indiceDix == undefined || indiceDix == null){
  localStorage.setItem('indiceDix',20);
  indiceDix=localStorage.getItem('indiceDix');
}else {
  indiceDix=localStorage.getItem('indiceDix');mondeParcouru[10] = true
}
//-------------------------------------------------------------------------
console.log('indiceUn ='+indiceUn)
img1 = document.createElement("img");
img1.src = tImage[1];
document.getElementById("un").appendChild(img1);
img1.style.width = '100%';
img1.style.height = '400px';

img2 = document.createElement("img");
img2.src = tImage[indiceDeux];
document.getElementById("deux").appendChild(img2);
img2.style.width = '100%';
img2.style.height = '400px';

img3 = document.createElement("img");
img3.src = tImage[indiceTrois];
document.getElementById("trois").appendChild(img3);
img3.style.width = '100%';
img3.style.height = '400px';

img4 = document.createElement("img");
img4.src = tImage[indiceQuatre];
document.getElementById("quatre").appendChild(img4);
img4.style.width = '100%';
img4.style.height = '400px';

img5 = document.createElement("img");
img5.src = tImage[indiceCinq];
document.getElementById("cinq").appendChild(img5);
img5.style.width = '100%';
img5.style.height = '400px';

img6 = document.createElement("img");
img6.src = tImage[indiceSix];
document.getElementById("six").appendChild(img6);
img6.style.width = '100%';
img6.style.height = '400px';

img7 = document.createElement("img");
img7.src = tImage[indiceSept];
document.getElementById("sept").appendChild(img7);
img7.style.width = '100%';
img7.style.height = '400px';

img8 = document.createElement("img");
img8.src = tImage[indiceHuit];
document.getElementById("huit").appendChild(img8);
img8.style.width = '100%';
img8.style.height = '400px';

img9 = document.createElement("img");
img9.src = tImage[indiceNeuf];
document.getElementById("neuf").appendChild(img9);
img9.style.width = '100%';
img2.style.height = '400px';

img10 = document.createElement("img");
img10.src = tImage[indiceDix];
document.getElementById("dix").appendChild(img10);
img10.style.width = '100%';
img10.style.height = '400px';







/*--------------------
Contants
--------------------*/
const speedWheel = 0.02
const speedDrag = -0.1

/*--------------------
Get Z
--------------------*/
const getZindex = (array, index) => (array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)))

/*--------------------
Items
--------------------*/
const $items = document.querySelectorAll('.carousel-item')
const $cursors = document.querySelectorAll('.cursor')

const displayItems = (item, index, active) => {
  const zIndex = getZindex([...$items], active)[index]
  item.style.setProperty('--zIndex', zIndex)
  item.style.setProperty('--active', (index-active)/$items.length)
}

/*--------------------
Animate
--------------------*/
const animate = () => {
  progress = Math.max(0, Math.min(progress, 100))
  active = Math.floor(progress/100*($items.length-1))
  
  $items.forEach((item, index) => displayItems(item, index, active))
}
animate()

/*--------------------
Click on Items
--------------------*/
$items.forEach((item, i) => {
  item.addEventListener('click', () => {
    if (mondeParcouru[i] == true){
      window.location.href=tAdress[i];
    }
  })
})

/*--------------------
Handlers
--------------------*/
const handleWheel = e => {
  const wheelProgress = e.deltaY * speedWheel
  progress = progress + wheelProgress
  animate()
}

const handleMouseMove = (e) => {
  if (e.type === 'mousemove') {
    $cursors.forEach(($cursor) => {
      $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    })
  }
  if (!isDown) return
  const x = e.clientX || (e.touches && e.touches[0].clientX) || 0
  const mouseProgress = (x - startX) * speedDrag
  progress = progress + mouseProgress
  startX = x
  animate()
}

const handleMouseDown = e => {
  isDown = true
  startX = e.clientX || (e.touches && e.touches[0].clientX) || 0
}

const handleMouseUp = () => {
  isDown = false
}

/*--------------------
Listeners
--------------------*/
document.addEventListener('mousewheel', handleWheel)
document.addEventListener('mousedown', handleMouseDown)
document.addEventListener('mousemove', handleMouseMove)
document.addEventListener('mouseup', handleMouseUp)
document.addEventListener('touchstart', handleMouseDown)
document.addEventListener('touchmove', handleMouseMove)
document.addEventListener('touchend', handleMouseUp)

//----------------------------------------------------------------------

// function fun(valeur){

//     if (mondeParcouru[valeur]=true){
//       window.location.href='https://jydellon.github.io/FizzBuzz/html/ChoixDiviseurMonde0Niveau0.html';
//     }
//   }

  