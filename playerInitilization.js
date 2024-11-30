$(document).ready(function(){
	if("textspd" in localStorage)
	{
		textSpd = localStorage.getItem("textspd");
	}	
	if("playercolor" in localStorage)
	{
		$("#player").css("background-color", localStorage.getItem("playercolor"))
	}
	if("playerglow" in localStorage)
	{
		$("#player").css("box-shadow", "0px 0px 10px 1px " + localStorage.getItem("playerglow"))
	}
});