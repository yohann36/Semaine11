var score_user    =document.getElementById('score_user');
var score_computer=document.getElementById('score_computer');
var computer_signe=document.querySelectorAll('.sign_game');
var user_signe    =document.querySelectorAll('.button_game');
var reset         =document.getElementById('reset');

var egaliter      =document.getElementById('egaliter');
var gagner        =document.getElementById('gagner');
var perdu         =document.getElementById('perdu');

var userE    = 0;
var computerE= 0;


function affiche_score(){
    score_computer.innerHTML='Score de L.I.A :  '+ computerE;
    score_user.innerHTML    ='Score du joueur :  '+userE;
}


affiche_score();


function choice_computer(){
    var choice_sign=Math.round(Math.random());
    if(choice_sign<0.34){
        computer_signe[0].style.display='none';
        computer_signe[2].style.display='none';
        computer_signe[3].style.display='none';
        computer_signe[1].style.display='block';
        return 'ciseaux';
    }else if(choice_sign>0.33 || choice_sign<0.68){
        computer_signe[0].style.display='none';
        computer_signe[1].style.display='none';
        computer_signe[3].style.display='none';
        computer_signe[2].style.display='block';
        return 'feuille';
    }else{
        computer_signe[0].style.display='none';
        computer_signe[1].style.display='none';
        computer_signe[2].style.display='none';
        computer_signe[3].style.display='block';
        return 'pierre';
    }
}



user_signe[0].addEventListener('click',function(){
                                            user_signe[1].style.display ='none';
                                            user_signe[2].style.display ='none';
                                            user_signe[0].style.display ='block';
                                            user_signe[0].style.margin  ='auto';
                                            var choice=choice_computer();
                                            if(choice==="ciseaux"){
                                                egaliter.style.display ='inline-block';
                                                userE++;
                                                computerE++;
                                            }else if(choice==="feuille"){
                                                gagner.style.display ='inline-block';
                                                userE++;
                                            }else if (choice==="pierre"){
                                                perdu.style.display ='inline-block';
                                                computerE++;
                                            }
                                            affiche_score();
},false);

user_signe[1].addEventListener('click',function(){
                                            user_signe[0].style.display ='none';
                                            user_signe[2].style.display ='none';
                                            user_signe[1].style.display ='block';
                                            user_signe[1].style.margin  ='auto';
                                            var choice=choice_computer();
                                            if(choice==="feuille"){
                                                egaliter.style.display ='inline-block';
                                                userE++;
                                                computerE++;
                                            }else if(choice==="pierre"){
                                                gagner.style.display ='inline-block';
                                                userE++;
                                            }else if(choice==="ciseaux"){
                                                perdu.style.display ='inline-block';
                                                computerE++;
                                            }
                                            affiche_score();
                                            
},false);

user_signe[2].addEventListener('click',function(){
                                            user_signe[0].style.display ='none';
                                            user_signe[1].style.display ='none';
                                            user_signe[2].style.display ='block';
                                            user_signe[2].style.margin  ='auto';
                                            var choice=choice_computer();
                                            if(choice==="pierre"){
                                                egaliter.style.display ='inline-block';
                                                userE++;
                                                computerE++;
                                            }else if(choice==="feuille"){
                                                perdu.style.display = 'inline-block';
                                                computerE++;
                                            }else if (choice==="ciseaux"){
                                                gagner.style.display  = 'inline-block';
                                                userE++;
                                            }
                                            affiche_score();
                                            
},false);

reset.addEventListener('click',function(){
    perdu.style.display   ='none';
    gagner.style.display  ='none';
    egaliter.style.display='none';
    
    for(var i=0,c=user_signe.length;i<c;i++){
        user_signe[i].style.display ='inline-block';
        user_signe[i].style.margin  ='';
    }
    for(var i=0,c=computer_signe.length;i<c;i++){
        computer_signe[i].style.display='none';
    }
    computer_signe[0].style.display='block';
    
},false);