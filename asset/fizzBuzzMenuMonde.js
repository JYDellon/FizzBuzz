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
tAdress=['https://jydellon.github.io/FizzBuzz/html/menuTraining.html','https://jydellon.github.io/FizzBuzz/html/menuMonde01.html','https://jydellon.github.io/FizzBuzz/html/menuMonde02.html','https://jydellon.github.io/FizzBuzz/html/menuMonde03.html','https://jydellon.github.io/FizzBuzz/html/menuMonde04.html','https://jydellon.github.io/FizzBuzz/html/menuMonde05.html','https://jydellon.github.io/FizzBuzz/html/menuMonde06.html','https://jydellon.github.io/FizzBuzz/html/menuMonde07.html','https://jydellon.github.io/FizzBuzz/html/menuMonde08.html','https://jydellon.github.io/FizzBuzz/html/menuMonde09.html','https://jydellon.github.io/FizzBuzz/html/menuMonde10.html'];
var valeur=0;
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

  