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


//-------------------------------------------------------------------------

img1 = document.createElement("img");
img1.src = tImage[1];
document.getElementById("un").appendChild(img1);
img1.style.width = '100%';
img1.style.height = '400px';

img2 = document.createElement("img");
if (localStorage.getItem('monde') == 2){
  img2.src = tImage[3];
  mondeParcouru[2] = true;
}else{img2.src = tImage[4];}
document.getElementById("deux").appendChild(img2);
img2.style.width = '100%';
img2.style.height = '400px';

img3 = document.createElement("img");
if (localStorage.getItem('monde') == 3){
  img3.src = tImage[5];
  mondeParcouru[3] = true;
}else{img3.src = tImage[6];}
document.getElementById("trois").appendChild(img3);
img3.style.width = '100%';
img3.style.height = '400px';

img4 = document.createElement("img");
if (localStorage.getItem('monde') == 4){
  img4.src = tImage[7];
  mondeParcouru[4] = true;
}else{img4.src = tImage[8];}
document.getElementById("quatre").appendChild(img4);
img4.style.width = '100%';
img4.style.height = '400px';

img5 = document.createElement("img");
if (localStorage.getItem('monde') == 5){
  img5.src = tImage[9];
  mondeParcouru[5] = true;
}else{img5.src = tImage[10];}
document.getElementById("cinq").appendChild(img5);
img5.style.width = '100%';
img5.style.height = '400px';

img6 = document.createElement("img");
if (localStorage.getItem('monde') == 6){
  img6.src = tImage[11];
  mondeParcouru[6] = true;
}else{img6.src = tImage[12];}
document.getElementById("six").appendChild(img6);
img6.style.width = '100%';
img6.style.height = '400px';

img7 = document.createElement("img");
if (localStorage.getItem('monde') == 7){
  img7.src = tImage[13];
  mondeParcouru[7] = true;
}else{img7.src = tImage[14];}
document.getElementById("sept").appendChild(img7);
img7.style.width = '100%';
img7.style.height = '400px';

img8 = document.createElement("img");
if (localStorage.getItem('monde') == 8){
  img8.src = tImage[15];
  mondeParcouru[8] = true;
}else{img8.src = tImage[16];}
document.getElementById("huit").appendChild(img8);
img8.style.width = '100%';
img8.style.height = '400px';

img9 = document.createElement("img");
if (localStorage.getItem('monde') == 9){
  img9.src = tImage[17];
  mondeParcouru[9] = true;
}else{img9.src = tImage[18];}
document.getElementById("neuf").appendChild(img9);
img9.style.width = '100%';
img2.style.height = '400px';

img10 = document.createElement("img");
if (localStorage.getItem('monde') == 10){
  img10.src = tImage[19];
  mondeParcouru[10] = true;
}else{img10.src = tImage[20];}
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

  