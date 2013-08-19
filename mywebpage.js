//Name: Tarrence Garrison
    //Date Completed: Thu June 20, 2013
    //Title: Motivation Time!
    //1st Javascript Project
    	var counter;
     	var totalTime = 300;
     	var seconds;
     	var minutes;
        var start;
        var images = ["motivation1.jpg","motivation2.jpg","motivation3.jpg"];
        var i=0;
        var cancel;
//Creates the timer by getting element, updating time, then calling count every second.
     	function createTimer(timerName) {
     		counter = document.getElementById(timerName);
     		updateTime();
     		window.setTimeout("count()",1000);
     	}
//Decreases totalTime by 1 every second.
     	function count() {
     		if(totalTime<=0) {
     			document.getElementById("sound").play();
     			alert("Time's Up");
     			return;
     		}
     		totalTime = totalTime - 1;
     		updateTime();
     		window.setTimeout("count()",1000);     
     	}

//Displays the updated time in the paragraph.     	
     	function updateTime() {
		
		//Converts totalTime to seconds and minutes.
     		seconds = totalTime%60;
     		minutes = Math.floor(totalTime/60);
		
		//Displays time by using innerHTML.
     		counter.innerHTML=((minutes<10) ? '0' + minutes : minutes) + ":" + ((seconds<10) ? '0' + seconds : seconds);
     	
     	//Causes Time in "many" element to disappear.
     		//document.getElementById("many").innerHTML="";   
     	}


//When set time button is clicked, prompts user for time and sets answer to totalTime in minutes.
     	function increment() {
        var x;

        var number=prompt("How many minutes would you like to work?");

        if (number!=null)
        {
        x=number + " minutes";
        document.getElementById("many").innerHTML=x;
        }
        totalTime = number * 60;
        updateTime();                            
     	}
//Cancels setTimeout, sets totalTime to 0, and set minutes display to 0.     	
      function resetTimer() {
        start = window.setTimeout("count()",1000);
        window.clearTimeout(start);
        totalTime = 0;
        document.getElementById("many").innerHTML="0" + " minutes";                            
        updateTime();                            
      }
//Creates setTimeout which calls the change function every 3 seconds.      
      function setImg() {
      	document.getElementById('left').style.visibility="visible";
      	document.getElementById('right').style.visibility="visible";
      	window.setTimeout("change()",3000);
      }
//Adds 1 to i, checks value of i to reset it, calls setTimeout again and updates image.      
      function change() {
      	i = i + 1;
      	if(i >= images.length) {
      		i = 0;
      	}
      	else if(i === -1) {
      		alert("No more motivation!");
      		return;
      	}
      	updateImg();
      	setImg();
      }  
//Sets image by changing src value.      
      function updateImg() {
      	var img = document.getElementById('picture');
      	var img2 = document.getElementById('picture2');
      	img2.src = images[i+1];
      	img.src = images[i];
      }	 
//Cancels the setTimeout of images and hides the divs containing the images.      
      function stopImg() {
      	cancel = window.setTimeout("change()",3000);
      	window.clearTimeout(cancel);
      	i = -2;
      	document.getElementById('left').style.visibility="hidden";
      	document.getElementById('right').style.visibility="hidden";
      	updateImg();
      }