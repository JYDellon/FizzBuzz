
var max=100;
var nbre = Math.floor(Math.random() * max);
var tNbre = new Boolean([]);
for(let i=0;i<max;i++){
    tNbre[max]=false;
}
var nbre = Math.floor(Math.random() * max);tNbre[nbre]=true;
var compteur = 0;
var s=30;var s2 = 2;
var trouver = new Boolean; 
var fin = new Boolean; 
trouver = false;
fin = true;
const text =['A vos marques','Prêt','Partez',' '];
var a=0;var cptVies=3;var coins = 0;
var j=0;

const NbreDeDiviseur = localStorage.getItem('NbreDeDiviseur');

document.getElementById('azerty').innerHTML = nbre;
var result = "";
    var nbre1=localStorage.getItem('nbre1');
    var nbre2=localStorage.getItem('nbre2');

onload=function initialisation1(){
  
    record1()
    document.getElementById('nbr').innerHTML = nbre;
    document.getElementById('nbr').style.color="white";
    //------------------------
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
            initialisation03()
          }
        
        }
    }

function initialisation03(){

document.getElementById('nbr').innerHTML = nbre;
document.getElementById('nbr').style.color="white";

record1()


var monInterval = setInterval(function () {document.getElementById('tempo').innerHTML=s--;
document.getElementById('tempo').style.color="white";
if (s<10 && s>0){document.getElementById('tempo').style.color="red";
}else if (s<0){
                clearInterval(monInterval);fin = true;
                scores();
                //-----------------------------------------------------------------------------------
                if (localStorage.getItem('compteur'+nbre1+nbre2) == null ){
                
                    localStorage.setItem('compteur'+nbre1+nbre2,compteur);
    
                    document.getElementById('record').innerHTML = "Record: " + localStorage.getItem('compteur'+nbre1+nbre2);
    
                }else if (localStorage.getItem('compteur'+nbre1+nbre2) < compteur){
                    
                    localStorage.setItem('compteur'+nbre1+nbre2,compteur);
                    var record = localStorage.getItem('compteur'+nbre1+nbre2);
                    document.getElementById('record').innerHTML = "Record: " + record;
    
                }
                //------------------------------------------------------------------------------------
                
              }
if(trouver == true){ 
                    clearInterval(monInterval);fin = true;

                    }
}
, 1000);


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



    if (fin == false && NbreDeDiviseur==2){
        
        // fizz buzz-------------------------------------------------------------
        if ((nbre%nbre1 == 0 && nbre%nbre2 == 0 ) && (choix == "Fizz-Buzz")){

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
            result="INCORRECT"
            fin = true;
            
            if (localStorage.getItem('compteur'+nbre1+nbre2) == null ){
                
                localStorage.setItem('compteur'+nbre1+nbre2,compteur);
                document.getElementById('record').innerHTML = "Record: " + localStorage.getItem('compteur'+nbre1+nbre2);

            }else if (localStorage.getItem('compteur'+nbre1+nbre2) < compteur){
                
                localStorage.setItem('compteur'+nbre1+nbre2,compteur);
                var record = localStorage.getItem('compteur'+nbre1+nbre2);
                document.getElementById('record').innerHTML = "Record: " + record;

            }
            
            trouver= true;
        }

        if (result == "CORRECT"){
            if (compteur == 1){document.getElementById('resultat').innerHTML = compteur + " bonne réponse";            
                                document.getElementById('resultat').style.color="white";
            }
            
            initialisation2()
        } 
    }else if (fin == false && NbreDeDiviseur==1){
        
 
        // fizz -----------------------------------------------------------------
        if ((nbre%nbre1 == 0) && (choix == "Fizz")){
            result="CORRECT"
            compteur++;
            scores();

        // ni l'un ni l'autre----------------------------------------------------
        }else if ((nbre%nbre1 != 0) && (choix == "Ni l'un ni l'autre")){
            result="CORRECT"
            compteur++;
            scores();
        }else {
            scores();
            result="INCORRECT"
            fin = true;
            
            if (localStorage.getItem('compteur'+nbre1+nbre2) == null ){
                
                localStorage.setItem('compteur'+nbre1+nbre2,compteur);
                document.getElementById('record').innerHTML = "Record: " + localStorage.getItem('compteur'+nbre1+nbre2);

            }else if (localStorage.getItem('compteur'+nbre1+nbre2) < compteur){
                
                localStorage.setItem('compteur'+nbre1+nbre2,compteur);
                var record = localStorage.getItem('compteur'+nbre1+nbre2);
                document.getElementById('record').innerHTML = "Record: " + record;

            }
            
            trouver= true;
        }

        if (result == "CORRECT"){
            if (compteur == 1){document.getElementById('resultat').innerHTML = compteur + " bonne réponse";            
                                document.getElementById('resultat').style.color="white";
            }
            
            initialisation2()
        } 
    }

}
function record1(){
    if (localStorage.getItem('compteur'+nbre1+nbre2) == null ){
    
        localStorage.setItem('compteur'+nbre1+nbre2,0);
        document.getElementById('record').innerHTML = "Record: " + 0;
    
    }else{
        document.getElementById('record').innerHTML = "Record: " + localStorage.getItem('compteur'+nbre1+nbre2)
    }
}
//-----------------------------------------------------------------------------------------------------------
function beep(){
    let audio = new Audio("https://www.soundjay.com/buttons/sounds/beep-28.mp3");
    audio.play();
}

//-----------------------------------------------------------------------------------------------------------
function win(){
    let audio = new Audio("https://universal-soundbank.com/sounds/11497.mp3");
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
