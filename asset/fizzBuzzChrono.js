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
var fin = new Boolean;
trouver = false;
fin = true;
const text =['A vos marques','Prêt','Partez',' '];
var a=0;
var j=0;

const NbreDeDiviseur = localStorage.getItem('NbreDeDiviseur');
document.getElementById('coins').innerHTML = coins;
document.getElementById('cptVies').innerHTML = cptVies;
document.getElementById('azerty').innerHTML = nbre;
var result = "";
    var nbre1=localStorage.getItem('nbre1');
    var nbre2=localStorage.getItem('nbre2');

onload=function initialisation1(){
  
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

    if (fin == false && NbreDeDiviseur == 2){
        
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
    }else if (fin == false && NbreDeDiviseur == 1){
        
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
            // scores();
            result="INCORRECT"; erreur++;
            cptVies=3-erreur;
            document.getElementById('cptVies').innerHTML = cptVies;
            
            fin = true;
            if (cptVies==0){

            if (localStorage.getItem('compteurChrono'+nbre1+nbre2) == null ){
                
                localStorage.setItem('compteurChrono'+nbre1+nbre2,compteur);
                document.getElementById('record').innerHTML = "Record: " + localStorage.getItem('compteurChrono'+nbre1+nbre2);

            }else if (localStorage.getItem('compteurChrono'+nbre1+nbre2) < compteur){
                
                localStorage.setItem('ompteurChrono'+nbre1+nbre2,compteur);
                var record = localStorage.getItem('compteurChrono'+nbre1+nbre2);
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
    if (localStorage.getItem('ompteurChrono'+nbre1+nbre2) == null ){
    
        localStorage.setItem('ompteurChrono'+nbre1+nbre2,0);
        document.getElementById('record').innerHTML = "Record: " + 0;
    
    }else{
        document.getElementById('record').innerHTML = "Record: " + localStorage.getItem('ompteurChrono'+nbre1+nbre2)
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
