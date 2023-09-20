console.log(`welcome to Raquel trivia`); 
var ans = window. prompt("would you like to continue(yes/no)"); 
let score = 0 
let total_q = 4
if(ans == "yes")
 var ans = prompt("1. what is my fav color?")
 if(ans == "red"){ 
     score+=1
     console.log(`correct!`); 
    } 
 else{ console.log(`good try`); } 
 var ans = prompt("2. what is my fav anime?") 
 if(ans == "moriarty the patriot"){ 
    score+=1 
    console.log(`correct!`); }
 else{ console.log(`good try`); } 
 var ans = prompt("3. how old am I?") 
 if(ans == 15){
    score+=1 
    console.log(`correct!`);
    } 
 else{ 
   console.log(`good try`); 
   } 
 var ans = prompt("4. when is my birthday?") 
    if(ans == "june 4"){
      score+=1 
      console.log(`correct!`);
    }
    else{
      console.log(`good try`);
    }
 