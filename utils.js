//***********************************************************************
// 
// Utility script for main website
// Manages front end variable states for different pages
// 
//***********************************************************************



// Variable that manages what state the navigation icon is in
// False means nav bar is closed 
// True means its open
var navFlag = false;

// Toggles the navbar 
function toggleNav(el) {
	navFlag = !navFlag;
    el.classList.toggle("change");
    if (navFlag == true) {
    	// Toggle the menu appearing
    }
}
