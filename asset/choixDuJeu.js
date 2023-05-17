





function valider2(){

}
function valider3(){
    if (localStorage.getItem('NbreDeDiviseur') == 2){
        window.location.href='https://jydellon.github.io/FizzBuzz/html/fizzBuzzDeuxDiviseurs.html'
    }else if (localStorage.getItem('NbreDeDiviseur') == 1){
        window.location.href='https://jydellon.github.io/FizzBuzz/html/fizzBuzzUnDiviseur.html'
    }
}
