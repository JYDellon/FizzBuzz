var nbre = Math.floor(Math.random() * 100);
var tNbre = new Boolean([]);
for(let i=0;i<max;i++){
    tNbre[max]=false;
}
var compteur = 0;
var s=0;var s2 = 2;
var trouver = new Boolean; trouver = false;
var fin = new Boolean; fin = true;
var erreur=0;
document.getElementById('azerty').innerHTML = nbre;
var result = "";
    var nbre1=localStorage.getItem('nbre1');
    var nbre2=localStorage.getItem('nbre2');


onload=function initialisation1(){
  
    record1()
    document.getElementById('nbr').innerHTML = nbre;
    document.getElementById('nbr').style.color="white";
    //------------------------
    var monInterval2 = setInterval(function () {
        
                                                if (s2==2){document.getElementById('tempo').innerHTML = "Prêt";}
                                                else if (s2==1){document.getElementById('tempo').innerHTML = "Partez";} 
                                                else if (s2<=1){document.getElementById('tempo').innerHTML = " ";
                                                                clearInterval(monInterval2)
                                                                fin = false;
                                                                initialisation02()}
                                                s2--;beep();
                                            }, 1000);
}

function initialisation2(){
    
    nbre = Math.floor(Math.random() * max);
    //-------gestion de la répétition des numéros-----------------
    if (tNbre[nbre]==true){
        initialisation2();
    }else{tNbre[nbre]=true}
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
            scores();
            result="INCORRECT";
            erreur++;
            
            if (localStorage.getItem('compteurChrono'+nbre1+nbre2) == null ){
                
                localStorage.setItem('compteurChrono'+nbre1+nbre2,compteur);
                document.getElementById('record').innerHTML = "Record: " + localStorage.getItem('compteurChrono'+nbre1+nbre2);

            }else if (localStorage.getItem('compteurChrono'+nbre1+nbre2) < compteur){
                
                localStorage.setItem('compteurChrono'+nbre1+nbre2,compteur);
                var record = localStorage.getItem('compteurChrono'+nbre1+nbre2);
                document.getElementById('record').innerHTML = "Record: " + record;

            }
            
            trouver= true;
            compteur = 0;
        }

        if (result == "CORRECT" || erreur<3){
            if (compteur == 1){document.getElementById('resultat').innerHTML = compteur + " bonne réponse";            
                                document.getElementById('resultat').style.color="white";
            }
            
            initialisation2();
        }
    }
}
function record1(){
    if (localStorage.getItem('compteurChrono'+nbre1+nbre2) == null ){
    
        localStorage.setItem('compteurChrono'+nbre1+nbre2,0);
        document.getElementById('record').innerHTML = "Record: " + 0;
    
    }else{
        document.getElementById('record').innerHTML = "Record: " + localStorage.getItem('compteurChrono'+nbre1+nbre2)
    }
}
//-----------------------------------------------------------------------------------------------------------
function beep(){
    let audio = new Audio("https://www.soundjay.com/buttons/sounds/beep-28.mp3");
    audio.play();
}
//-----------------------------------------------------------------------------------------------------------
function scores(){
    if (compteur <= 1){document.getElementById('resultat').innerHTML = compteur + " bonne réponse";            
                                    document.getElementById('resultat').style.color="white";
    }else{
        document.getElementById('resultat').innerHTML = compteur + " bonnes réponses";            
        document.getElementById('resultat').style.color="white";}
}
//-----------------------------------------------------------------------------------------------------------