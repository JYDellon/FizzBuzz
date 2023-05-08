var nbre = Math.floor(Math.random() * 100);
var compteur = 0;
var s=30;var s2 = 2;
var trouver = new Boolean; trouver = false;
var fin = new Boolean; fin = true;
document.getElementById('azerty').innerHTML = nbre;
var result = "";


onload=function initialisation1(){
  
    record1()
    document.getElementById('nbr').innerHTML = nbre;
    document.getElementById('nbr').style.color="white";
    //------------------------
    var monInterval2 = setInterval(function () {
        
                                                if (s2==2){document.getElementById('tempo').innerHTML = "Prêt";}
                                                else if (s2==1){document.getElementById('tempo').innerHTML = "Partez";} 
                                                else if (s2<=1){
                                                                clearInterval(monInterval2)
                                                                fin = false;
                                                                initialisation03()}
                                                s2--;beep();
                                            }, 1000);

    //------------------------


}
function initialisation03(){

document.getElementById('nbr').innerHTML = nbre;
document.getElementById('nbr').style.color="white";

record1()


var monInterval = setInterval(function () {document.getElementById('tempo').innerHTML=s--;

if (s<10 && s>0){document.getElementById('tempo').style.color="red";
}else if (s<0){
                clearInterval(monInterval);fin = true;
                scores();
                //-----------------------------------------------------------------------------------
                if (localStorage.getItem('compteur'+nbre1+nbre2) == null ){
                
                    localStorage.setItem('compteur'+nbre1+nbre2,compteur);
    
                    document.getElementById('record').innerHTML = "Record: " + localStorage.getItem('compteur'+nbre1+nbre2);
    
                }else if (localStorage.getItem('compteur'+nbre1+nbre2) < compteur){
                    win();
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
    
    nbre = Math.floor(Math.random() * 100);
    document.getElementById('nbr').innerHTML = nbre;
    document.getElementById('nbr').style.color="white";
    document.getElementById('azerty').innerHTML = nbre;
    
}

function fizzBuzz(choix){

    var nbre1=localStorage.getItem('nbre1');
    var nbre2=localStorage.getItem('nbre2');

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
            
            if (localStorage.getItem('compteur'+nbre1+nbre2) == null ){
                
                localStorage.setItem('compteur'+nbre1+nbre2,compteur);
                document.getElementById('record').innerHTML = "Record: " + localStorage.getItem('compteur'+nbre1+nbre2);

            }else if (localStorage.getItem('compteur'+nbre1+nbre2) < compteur){
                
                localStorage.setItem('compteur'+nbre1+nbre2,compteur);
                var record = localStorage.getItem('compteur'+nbre1+nbre2);
                document.getElementById('record').innerHTML = "Record: " + record;

            }
            
            trouver= true;
            compteur = 0;
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
        document.getElementById('record').innerHTML = "Record: " + localStorage.getItem+nbre1+nbre2('compteur')
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