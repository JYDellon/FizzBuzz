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


document.getElementById('coins').innerHTML = coins;
document.getElementById('cptVies').innerHTML = cptVies;
document.getElementById('azerty').innerHTML = nbre;
var result = "";

var nbre1=2;
var nbre2=3;


//-----------------------------------------------


var h=0;var k=-50;
document.getElementById("card").style.position="fixed";
document.getElementById("card").style.top = "250px";
document.getElementById("card").style.left = "-50px";
document.getElementById("card").style.fontSize="50px";

onload = function timer1(){

    myinterval=setInterval(deplacement,1);

}

function deplacement(){

    if (k<15){

        k++;
        document.getElementById("card").style.left = 15*k+"px";
        
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
        k=0; console.log(k);
        doudou=setInterval(deplacement2,1);

}

function deplacement2(){

    if (k<40){
       
        k++;
        document.getElementById("card").style.left = 225+15*k+"px";
        
    }else {
            clearInterval( doudou);
            initialisation1();
    }
}























//-------------------------------------------------


    
function initialisation1(){
  
    record1()
    document.getElementById('nbr').innerHTML = nbre;
    document.getElementById('nbr').style.color="white";
  
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
    // if (tNbre[nbre]==true){
    //     initialisation2();
    // }else{tNbre[nbre]=true}
    //------------------------------------------------------------
    document.getElementById('nbr').innerHTML = nbre;
    document.getElementById('nbr').style.color="white";
    document.getElementById('azerty').innerHTML = nbre;
    
}

function fizzBuzz(choix){

    if (fin == false){
        
        // fizz buzz-------------------------------------------------------------
        if ((nbre%nbre1 == 0 && nbre%nbre2 == 0) && (choix == "Fizz-Buzz")){

            result="CORRECT"
            compteur++;
            scores();

        // fizz -----------------------------------------------------------------
        }else if ((nbre%nbre1 == 0 && nbre%nbre2 != 0 ) && (choix == "Fizz")){
            result="CORRECT"
            compteur++;
            scores();

        // buzz------------------------------------------------------------------
        }else if ((nbre%nbre2 == 0 && nbre%nbre1 != 0 ) && (choix == "Buzz")){
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
                                document.getElementById('resultat').style.color="white";
            }
            
            initialisation2()
        } else if (result =="INCORRECT" && erreur<3){
            fin = false;
        } else if (result =="INCORRECT" && erreur>=3){
            fin = true;
        }
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
                                    document.getElementById('resultat').style.color="white";
    }else{
        document.getElementById('resultat').innerHTML = compteur + " bonnes réponses";            
        document.getElementById('resultat').style.color="white";}
}
//-----------------------------------------------------------------------------------------------------------
