var isActive = true;
var nav = document.getElementById("navigation");

function closeMenu() {

	if(isActive) {
    	nav.style.visibility = "hidden";
    	document.body.style.paddingTop = "2.5em";
	}
	else {
    	nav.style.visibility = "visible";
    	document.body.style.paddingTop = "17.4em";
	}

	isActive = !isActive;
}

window.onresize = function() {

	if(window.innerWidth > 600)
	{
    	nav.style.visibility = "visible";
    	document.body.style.paddingTop = "50px";

    	isActive = true;
    }
    else
    {
    	nav.style.visibility = "hidden";
    	document.body.style.paddingTop = "2.5em";

    	isActive = false;
    }
};