var input=document.getElementById('valeur');
var dBoard=document.getElementById('dashboard');
var valider=document.getElementById('submit');
var indic=document.querySelectorAll('#game .indic');
var c =0;
var vie=document.getElementById('nb_vie');
var vieE=6;
var choixOrdi=Math.round(Math.random()*100);

/*_Affiche le nombre de vies___________________________________________________________*/

function affiche_Vie() {
    if(vieE>1){
    vie.innerHTML='Il vous reste '+ vieE +' vies';
    }else{
        vie.innerHTML='Il vous reste '+ vieE +' vie';
    }
}
 
affiche_Vie(); //_ Active l'affiche le nombre de vies au demarrage

/*_DOM 2 Active le jeu lors du clique sur le bouton de validation_________________________*/

        valider.addEventListener('click',function(){
          //_ function qui vérifie la solution de l'utilisateur  
            if(c<6){ 
                var inputvalue=parseInt(input.value,10);
                if(inputvalue===choixOrdi){
                    indic[3].style.display='block';
                    dBoard.style.display='none';//_pour accéder au niveau suivant
                }else if (((inputvalue<0)||(inputvalue>100)||(isNaN(inputvalue)))&& c<5){
                    indic[2].style.display='block';
                }else if(inputvalue<choixOrdi && c<5){
                    indic[1].style.display='block';
                } else if(inputvalue>choixOrdi && c<5){
                    indic[0].style.display='block';
                }else{
                indic[4].style.display='block';
                }
            c++;//_compteur de vie accrémante à chaque tour
            vieE-=1;
            affiche_Vie();//_affiche la nouvelle valeur de la vie à chaque tour
            }
        },false);
    
 
/*_DOM 2 efface le nombre precedent et enleve la vignette interactive_________________________*/
input.addEventListener('click',function(e){
    for(var i=0,c=indic.length;i<c;i++){
        indic[i].style.display='none';
        e.target.value="";
    }
},false);
