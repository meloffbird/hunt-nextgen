// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


// MENU NAVIGATION
// (function(){

// 	var button = document.getElementbyId('cn-button'),
//     wrapper = document.getElementById('cn-wrapper');

// 	//open and close menu when the button is clicked
// 	var open = false;
// 	toggle.addEventListener('click', handler, false);
// 	wrapper.addEventListener('click', cnhandle, false);

// 	function cnhandle(e){
// 		e.stopPropagation();
// 	}

// 	function handler(e){
// 		if (!e) var e = window.event;
// 	 	e.stopPropagation();//so that it doesn't trigger click event on document

// 	  	if(!open){
// 	    	openNav();
// 	  	}
// 	 	else{
// 	    	closeNav();
// 	  	}
// 	}
// 	function openNav(){
// 		open = true;
// 		button.innerHTML = "-";
// 	    classie.add(wrapper, 'opened-nav');
// 	}
// 	function closeNav(){
// 		open = false;
// 		button.innerHTML = "+";
// 		classie.remove(wrapper, 'opened-nav');
// 	}
// 	document.addEventListener('click', closeNav);

// })();



// FLOORPLAN BUTTONS

$(".focusoverlay").hide();
$(".collaboverlay").hide();
$(".playoverlay").hide();

$(".f-map").click(function(){
    $(".focusoverlay").toggle();
});

$(".c-map").click(function(){
    $(".collaboverlay").toggle();
});

$(".p-map").click(function(){
    $(".playoverlay").toggle();
});




