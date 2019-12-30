
      /*  var x = document.getElementById("myAudio");	

          $(document).ready(function() {
            var btn = $(".btn5");
            btn.click(function() {
            btn.toggleClass("paused");
            return false;
             });
             });*/

         /*function playAudio()
         { 
	       var myVideo = document.getElementsByTagName('audio')[0];
	       myVideo.play();
	     } 

         function pauseAudio()
         {
          var myVideo = document.getElementsByTagName('audio')[0];	
	      myVideo.pause();
         }*/

         function changeImage() {
           var image = document.getElementById('myImage');
  //var myVideo = document.getElementsByTagName('audio')[0];
  if (image.src.match("pause"))
   {
    image.src = "CSS/GUI/play.jpg";
    var myVideo = document.getElementsByTagName('audio')[0];
        myVideo.pause();
  } 
  else 
  {
   image.src = "CSS/GUI/pause.jpg";
    var myVideo = document.getElementsByTagName('audio')[0];
    myVideo.play();
  }
}

		function playNext() {
		//var audio = new Audio();
		var myVideo = document.getElementsByTagName('audio')[0];
		myVideo.src = "lost stars.mp3";
		myVideo.play();
            }
		
		function playPrevious() {
		var myVideo = document.getElementsByTagName('audio')[0];
		myVideo.src = "night we met.mp3";
		myVideo.play();
		}

