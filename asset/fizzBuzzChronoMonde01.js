
var tablo=[[2,3],[2,5],[2,7],[2,11],[3,5],[3,7],[3,11],[5,7],[5,11],[7,11]];
var indiceI=0;
var erreur = 0;var cptVies=3;var coins = 0;
var max=100;
var nbre = Math.floor(Math.random() * max);
var tNbre = new Boolean([]);
for(let i=0;i<max;i++){
    tNbre[max]=false;
}
var nbre = Math.floor(Math.random() * max);
tNbre[nbre]=true;
var compteur = 0;
var s2 = 2;
var trouver = new Boolean;
var fin = new Boolean;fin = true;
trouver = false;
const text =['A vos marques','Prêt','Partez',' '];
var a=0;var cptVies=3;var coins = 0;
var j=0;
var mondeUnNiveau=1;

document.getElementById('coins').innerHTML = coins;
document.getElementById('cptVies').innerHTML = cptVies;
document.getElementById('azerty').innerHTML = nbre;
document.getElementById('nbr').innerHTML = nbre;
document.getElementById('nbr').style.color="black";

var result = "";


//-----------------------------------------------


var nbre1=0;
var nbre2=0;
var fizz=3;
var buzz=3;
var fb=3;
document.getElementById('fizz').innerHTML = "fizz: "+ fizz;
document.getElementById('fizz').style.fontSize="25px";
document.getElementById('fizz').style.fontWeight="bold";

document.getElementById('buzz').innerHTML =  "buzz: "+ buzz;
document.getElementById('buzz').style.fontSize="25px";
document.getElementById('buzz').style.fontWeight="bold";
document.getElementById('fb').innerHTML =  "fizzbuzz: "+ fb;
document.getElementById('fb').style.fontSize="25px";
document.getElementById('fb').style.fontWeight="bold";

var marge=(screen.width)-(document.getElementById("card").offsetWidth)

//-----------------------------------------------

var h=0;var k=-50;
document.getElementById("card").style.position="fixed";
document.getElementById("card").style.top = "100px";
document.getElementById("card").style.left = "-50px";
document.getElementById("card").style.fontSize="5px";



function affectationDesFiizBuzz(){
    compteur=0;
    if (localStorage.getItem('mondeUnNiveau') == null){
        localStorage.setItem('mondeUnNiveau',mondeUnNiveau);
    }else{
        mondeUnNiveau=localStorage.getItem('mondeUnNiveau');
        indiceI=mondeUnNiveau-1;
    }
    nbre1=tablo[indiceI][0];
    nbre2=tablo[indiceI][1];
     
}

onload = function timer(){
    
    affectationDesFiizBuzz();
    timer1()

}
function timer1(){
    
    if((nbre1 == 5 && nbre2 == 11)||(nbre1 == 7 && nbre2 == 11)){
        fizz=3; buzz=3; fb=1;
    }else{
        fizz=3; buzz=3; fb=3;
    }
    
    for(let i=0;i<max;i++){
        tNbre[max]=false;
    }
    document.getElementById('title').innerHTML="Fizz = " + nbre1 + " Buzz = " + nbre2;
    myinterval=setInterval(deplacement,1);
}


//--------------------------------------

    function deplacement(){
    
        if (k<(marge/2)){
    
            k=k+6;
            document.getElementById("card").style.left = k+"px";
            
        }else {
                clearInterval(myinterval);
                timer3();
        }
    }
    
    function timer3(){
    
        az=setInterval(et,250);
       
    }
    function et(){
        if (h<10){
            h++
        }else{
            clearInterval(az);
            timer2();
        }
    
    }
        
    function timer2(){
            k=0;
            doudou=setInterval(deplacement2,40);
    
    }
    
    function deplacement2(){
    
        if (k<40){
           
            k++;
            document.getElementById("card").style.left = 50+55*k+"px";
            
        }else {
                clearInterval( doudou);
                initialisation1();
        }
    }

//-------------------------------------------------

function initialisation1(){
  
    record1()
    myInterval2 = setInterval(afficher,20)
}


    //------------------------

function afficher(){

    document.getElementById('tempo').innerHTML = text[a];
    console.log(text[a]);

    if (j<50){

        j++;
        document.getElementById('tempo').style.fontSize = j+"px";
        
    }else {
      if (a<3){
        j=0;  a++;
      }else{
        fin = false;
        clearInterval(myInterval2); 
      }
    
    }
}


    //------------------------

function initialisation2(){
    
    nbre = Math.floor(Math.random() * max);
    //-------gestion de la répétition des numéros-----------------
    if (tNbre[nbre]==true){
        initialisation2();
    }else{tNbre[nbre]=true}
    //------------------------------------------------------------
    document.getElementById('nbr').innerHTML = nbre;
    document.getElementById('nbr').style.color="black";
    document.getElementById('azerty').innerHTML = nbre;
}

//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------

function fizzBuzz(choix){
        
    if (fin == false){
        
        // fizz buzz-------------------------------------------------------------
        if ((nbre%nbre1 == 0 && nbre%nbre2 == 0) && (choix == "Fizz-Buzz")){
            if (fb>0){
                fb--;
            }
            result="CORRECT"
            compteur++;
            scores();

        // fizz -----------------------------------------------------------------
        }else if ((nbre%nbre1 == 0 && nbre%nbre2 != 0 ) && (choix == "Fizz")){
            if (fizz>0){
                fizz--;
            }
            result="CORRECT"
            compteur++;
            scores();

        // buzz------------------------------------------------------------------
        }else if ((nbre%nbre2 == 0 && nbre%nbre1 != 0 ) && (choix == "Buzz")){
            if (buzz>0){
                buzz--;
            }
            result="CORRECT"
            compteur++;
            scores();

        // ni l'un ni l'autre----------------------------------------------------
        }else if ((nbre%nbre1 != 0 && nbre%nbre2 != 0) && (choix == "Ni l'un ni l'autre")){
            result="CORRECT"
            compteur++;
            scores();
        }else {
            erreur++;
            result="INCORRECT"; 
            cptVies=3-erreur;
            document.getElementById('cptVies').innerHTML = cptVies;
            

            fin = true;
            if (cptVies==0){
                if (localStorage.getItem('compteurChrono2'+nbre1+nbre2) == null ){
                    
                    localStorage.setItem('compteurChrono2'+nbre1+nbre2,compteur);
                    document.getElementById('record').innerHTML = "Record: " + localStorage.getItem('compteurChrono2'+nbre1+nbre2);

                }else if (localStorage.getItem('compteurChrono2'+nbre1+nbre2) < compteur){
                    
                    localStorage.setItem('compteurChrono2'+nbre1+nbre2,compteur);
                    var record = localStorage.getItem('compteurChrono2'+nbre1+nbre2);
                    document.getElementById('record').innerHTML = "Record: " + record;

                }
            }
            trouver= true;
        }

        if (result == "CORRECT"){
            if (compteur == 1){document.getElementById('resultat').innerHTML = compteur + " bonne réponse";            
                                document.getElementById('resultat').style.color="black";
            }
            
            initialisation2()
        } else if (result =="INCORRECT" && erreur<3){
            fin = false;
        } else if (result =="INCORRECT" && erreur>=3){
            fin = true;
        }
    }

//----------------------------------objectifs--------------------------------------    
    

    if (fizz+buzz+fb == 0){k=-50;k=0;
        niveauTermine();
    }
    document.getElementById('fizz').innerHTML = "fizz: "+ fizz;
    document.getElementById('buzz').innerHTML =  "buzz: "+ buzz;
    document.getElementById('fb').innerHTML =  "fizzbuzz: "+ fb;
//--------------------------------------------------------------------------------
}
function niveauTermine(){
    if (indiceI<10){
    indiceI++; mondeUnNiveau++;localStorage.setItem('mondeUnNiveau',mondeUnNiveau);
    alert('niveau '+indiceI +' terminé');
    h=0;k=-50;
    affectationDesFiizBuzz();
    timer1();
    }else {
        alert('monde 02 DEBLOQUE')
    }
}
function record1(){
        if (localStorage.getItem('compteurChrono2'+nbre1+nbre2) == null ){
        
            localStorage.setItem('compteurChrono2'+nbre1+nbre2,0);
            document.getElementById('record').innerHTML = "Record: " + 0;
        
        }else{
            document.getElementById('record').innerHTML = "Record: " + localStorage.getItem('compteurChrono2'+nbre1+nbre2)
        }
    
}
//-----------------------------------------------------------------------------------------------------------
function beep(){
    let audio = new Audio("https://www.soundjay.com/buttons/sounds/beep-28.mp3");
    audio.play();
}

//-----------------------------------------------------------------------------------------------------------
function scores(){
    if (compteur == 1){document.getElementById('resultat').innerHTML = compteur + " bonne réponse";            
                                    document.getElementById('resultat').style.color="black";
    }else{
        document.getElementById('resultat').innerHTML = compteur + " bonnes réponses";            
        document.getElementById('resultat').style.color="black";}
}
//-----------------------------------------------------------------------------------------------------------
