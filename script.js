// Hide all elements with class="containerTab", except for the one that matches the clickable grid column
var Games= function(url,img){
this.url=url;
this.img=img



}


var test= new Games('http://www.google.com','Harley-Davidson-Freedom-Tour-268x224.jpg')
var cleo= new Games('http://www.google.com','Cleopatra-PLUS-268x224.jpg')
var sacred= new Games('http://www.google.com','SacredStones_268x224.jpg')


function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).classList.add('active')

}


function launchGame(){
  let boxes = document.querySelectorAll('.box');
      for(var i=0;i<boxes.length;i++){
        var bg=window[boxes[i].getAttribute('value')]
        boxes[i].style.backgroundSize="cover"
        boxes[i].style.backgroundImage="url("+bg.img+")";
   
   
        boxes[i].addEventListener('click',function(){
          console.log(this.getAttribute('value'))
          var game=this.getAttribute('value');
          var results= window[game]
          console.log(results.url)
          window.location=results.url
       
        
      })
    
    
  }
  
  
}

 launchGame()

 var recognition = new webkitSpeechRecognition();
 var returnedSpeech=[];
 recognition.onresult = function(event) {
      
      if (event.results.length > 0) {
        speech.value = event.results[0][0].transcript;
        speech.form.submit();
        var x=speech.value
        
        readOutLoud(x)
        openGame(x)
      }
    }


function readOutLoud(message) {
  var speech = new SpeechSynthesisUtterance();

  // Set the text and voice attributes.
  speech.text = message;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
  
}

var Games=function(gamename){
  this.gamename=gamename
  
 
}

var raindow =new Games('riches')
var test =new Games('test')

function openGame(game){
  
 let returnGame=window[game]
alert(returnGame.url)
  
  
}


  



