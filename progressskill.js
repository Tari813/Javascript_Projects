var decent = 1200;
var master = 600000;
var minutes;
var decentOriginal;
var masterOriginal;
var totalDecent = 0;
var totalMaster = 0;
var decentLeft = 1200;
var masterLeft = 600000;
var totalMin = 0;

function compute() {
    minutes = parseInt(document.getElementById('userInput').value) || 0;
    decentOriginal = minutes / decent * 100;
    masterOriginal = minutes / master * 100;
    updatePercent();
    
    localStorage["time"] = (parseInt(localStorage["time"]) || 0) + minutes;
    document.getElementById('storage').innerHTML = localStorage["time"] + " total minutes spent on skill";
    document.getElementById('body').style.height='815px';
}

function updatePercent() {
    var decentPercent = document.getElementById('decent-percent');
    var masterPercent = document.getElementById('master-percent');
    var decentCompute = Math.round(decentOriginal * 100) / 100;
    var masterCompute = Math.round(masterOriginal * 100) / 100;
    decentLeft = decentLeft - minutes;
    masterLeft = masterLeft - minutes;
    //totalDecent = totalDecent + decentCompute;
    //totalMaster = totalMaster + masterCompute;
    totalMin = Math.round(totalMin + minutes/60);
    if (decentLeft <= 0) {
        totalDecent = 100;
        decentLeft = 0;
        decentCompute = 0;
    }
    if (masterLeft <= 0) {
        totalMaster = 100;
        masterLeft = 0;
        masterCompute = 0;
    }
    if (totalMin >= 600000) {
        totalMin = 600000;
    }
	
	localStorage["dpercent"] = (parseInt(localStorage["dpercent"]) || 0) + decentCompute;
	localStorage["mpercent"] = (parseInt(localStorage["mpercent"]) || 0) + masterCompute;
	//localStorage.clear();
	
    //document.getElementById('dpercent').innerHTML = totalDecent.toFixed(1) + "%";
    //document.getElementById('mpercent').innerHTML = totalMaster.toFixed(2) + "%";
    document.getElementById('dpercent').innerHTML = localStorage["dpercent"] + "%";
    document.getElementById('mpercent').innerHTML = localStorage["mpercent"] + "%";
    decentPercent.innerHTML = /*totalDecent.toFixed(1) + "%" + */" to Decent Skill Level." + " " + decentLeft + " minute(s) to go.";
    masterPercent.innerHTML = /*totalMaster.toFixed(2) + "%" + */" to Master Skill Level." + " " + masterLeft + " minute(s) to go.";
    document.getElementById('total-min').innerHTML = totalMin + " hours spent on skill acquisition for this session.";
    
  }

function setSkill() {
    var whatSkill = prompt("What skill are you working on?");
    document.getElementById('skill-display').innerHTML = "I'm Learning " + whatSkill;
}



//Need way to keep track of session without using server-side programming 
//Make it an equation; set a new variable to 0 then to be variable + minutes and then save it to localStorage so that it will increment each time.