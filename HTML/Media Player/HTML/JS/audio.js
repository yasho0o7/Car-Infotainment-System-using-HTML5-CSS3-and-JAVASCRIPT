
      /*  var x = document.getElementById("myAudio");	

          $(document).ready(function() {
            var btn = $(".btn5");
            btn.click(function() {
            btn.toggleClass("paused");
            return false;
             });
             });*/
       
          function showImage(){
             
        document.getElementById('old').style.visibility="visible";
    }


         function playAudio()
         { 
	       var myVideo = document.getElementsByTagName('audio')[0];
	       myVideo.play();
	     } 

         function pauseAudio()
         {
          var myVideo = document.getElementsByTagName('audio')[0];	
	      myVideo.pause();
         }

      function playCurrent() {
    //var audio = new Audio();
    var myVideo = document.getElementsByTagName('audio')[0];
    myVideo.src = "music2.mp3";
    myVideo.play();
            }

		function playNext() {
		//var audio = new Audio();
		var myVideo = document.getElementsByTagName('audio')[0];
		myVideo.src = "music3.mp3";
		myVideo.play();
            }

    
    function playPrevious() {
    var myVideo = document.getElementsByTagName('audio')[0];
    myVideo.src = "music1.mp3";
    myVideo.play();
    }
		 /* function playNext1() {
    //var audio = new Audio();
    var myVideo = document.getElementsByTagName('audio')[0];
    myVideo.src = "music4.mp3";
    myVideo.play();
            }
      
        function playNext2() {
    //var audio = new Audio();
    var myVideo = document.getElementsByTagName('audio')[0];
    myVideo.src = "music5.mp3";
    myVideo.play();
            }  
   
      function playNext3() {
    //var audio = new Audio();
    var myVideo = document.getElementsByTagName('audio')[0];
    myVideo.src = "music6.mp3";
    myVideo.play();
            }


      function playPrevious1() {
    var myVideo = document.getElementsByTagName('audio')[0];
    myVideo.src = "music7.mp3";
    myVideo.play();
    }

      function playPrevious2() {
    var myVideo = document.getElementsByTagName('audio')[0];
    myVideo.src = "music8.mp3";
    myVideo.play();
    }

      function playPrevious3() {
    var myVideo = document.getElementsByTagName('audio')[0];
    myVideo.src = "music9.mp3";
    myVideo.play();
    }*/

    /*function yourFunction() {
  var x = document.createElement("IMG");
  x.setAttribute("src", "CSS/GUI/img_1.jpg");
  x.setAttribute("width", "304");
  x.setAttribute("height", "228");
  document.body.appendChild(x);
}*/


function myFunction2(id) {
    var y = document.getElementsByTagName('img').item(0);
    y.src=id;
}

function selectSong(id) {
    var myVideo = document.getElementsByTagName('audio')[0];
    myVideo.src = id;
    myVideo.play();
}


function myFunction(x) {
    if(x.classList.toggle("fa-pause")){
      	var myVideo = document.getElementsByTagName('audio')[0];	
       myVideo.play();
    }
    else{
    	   var myVideo = document.getElementsByTagName('audio')[0];
       myVideo.pause();
    } 		
}

