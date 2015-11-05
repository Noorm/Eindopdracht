/*-----navigatie toggle-----*/
var menu = document.querySelector(".menu"); /* eerste element in het document met the class .menu*/
var links = document.querySelector(".links");

function showing(){
    links.classList.toggle('showing');
}
menu.addEventListener('click', showing); /* hij doet niks tot iemand er op klikt , dan showing. Attach an event handler to the document */




/*-----Formulier-----*/
var project = document.querySelector("#project"); /* eerste element in het document met the id #project*/
var stage = document.querySelector("#stage");

var projectButton = document.querySelector("#project-button"); 
var stageButton = document.querySelector("#stage-button");

/*-----Voegt een class toe-----*/
project.classList.add("hidden")
stage.classList.add("hidden")


function buttonToggle() {
	if (projectButton.checked){
	    project.classList.remove('hidden');
	    stage.classList.add('hidden');
	} else if (stageButton.checked){
	    project.classList.add('hidden');
	    stage.classList.remove('hidden');
	}  
}

projectButton.addEventListener('click', buttonToggle);
stageButton.addEventListener('click', buttonToggle);



	






	{
		console.log("GO Ho");
	}
