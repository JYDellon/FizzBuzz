
var fizzbuzz=0;
var fizzbuzz2=0;
var nbr0 =[0,0,0,0,0,0,0,0];
var nbre1 = 0;
var nbre2 = 0;
var ok=[false,false,false,false];



function fizzBuzzIntro(choix2){

        if (choix2 == 2){
            if (ok[0] == false){
                fizzbuzz++;
                ok[0] = true;
                nbr0[2]=2;
            }else if (ok[0] == true){
                fizzbuzz--;
                nbr0[2]=0;
                ok[0] = false;
                document.getElementById('deux1').innerHTML="2"
                document.getElementById('deux1').style.color="white";
            }
        }
        if (choix2 == 3){
            if (ok[1] == false){
                fizzbuzz++;
                nbr0[3]=3;
                ok[1] = true;
            }else if (ok[1] == true){
                fizzbuzz--;
                nbr0[3]=0;
                ok[1] = false;
                document.getElementById('trois1').innerHTML="3"
                document.getElementById('trois1').style.color="white";
            }
        }
        if (choix2 == 5){
            if (ok[2] == false){
                fizzbuzz++;
                nbr0[5]=5;
                ok[2] = true;
            }else if (ok[2] == true){
                fizzbuzz--;
                nbr0[5]=0;
                ok[2] = false;
                document.getElementById('cinq1').innerHTML="5"
                document.getElementById('cinq1').style.color="white";
            }
        }
        if (choix2 == 7){
            if (ok[3] == false){
                fizzbuzz++;
                nbr0[7]=7;
                ok[3] = true;
            }else if (ok[3] == true){
                fizzbuzz--;
                nbr0[7]=0;
                ok[3] = false;
                document.getElementById('sept1').innerHTML="7"
                document.getElementById('sept1').style.color="white";
            }
       
        
    }
    if (fizzbuzz<2){
        
//---------------------------------------------------------------
        document.getElementById('deux').disabled= false;
        document.getElementById('trois').disabled= false;
        document.getElementById('cinq').disabled= false;
        document.getElementById('sept').disabled= false;
    }
//---------------------------------------------------------------
    if (nbr0[2]==2){
        document.getElementById('deux1').style.color="red";
    }
    if (nbr0[3]==3){
        document.getElementById('trois1').style.color="red";
    }
    if (nbr0[5]==5){
        document.getElementById('cinq1').style.color="red";
    }
    if (nbr0[7]==7){
        document.getElementById('sept1').style.color="red";
    }

//---------------------------------------------------------------

    if (fizzbuzz==2){
        if (nbr0[2]==2){
                    document.getElementById('deux').style.color='red';
                }
        for(let i=0;i<nbr0.length;i++){
            
            if (nbr0[i]!=0 ){
                
                if (fizzbuzz2==0){
                    nbre1=nbr0[i];
                    localStorage.setItem('nbre1',nbre1);
                    if (nbre1==2){document.getElementById('deux1').innerHTML="Fizz"}
                    if (nbre1==3){document.getElementById('trois1').innerHTML="Fizz"}
                    if (nbre1==5){document.getElementById('cinq1').innerHTML="Fizz"}
                    fizzbuzz2++;
                }else {               
                    nbre2=nbr0[i];
                    localStorage.setItem('nbre2',nbre2);
                    if (nbre1==3){document.getElementById('trois1').innerHTML="Buzz"}
                    if (nbre1==2){document.getElementById('cinq1').innerHTML="Buzz"}
                    if (nbre1==7){document.getElementById('sept1').innerHTML="Buzz"}
                }
            }
            if (nbr0[2]==0){
                document.getElementById('deux').disabled= true;
            }
            if (nbr0[3]==0){
                document.getElementById('trois').disabled= true;
            }
            if (nbr0[5]==0){
                document.getElementById('cinq').disabled= true;
            }
            if (nbr0[7]==0){
                document.getElementById('sept').disabled= true;
                
            }

        }
    }
}
function valid(){
    if (fizzbuzz==2){
        window.location.href='https://jydellon.github.io/FizzBuzz/html/choixDuJeu.html'
    }
}


//------------------------------------------------------------------------------------

