//sets the text in the selector with the given text
setText = function(selector, text){
	document.getElementById("text").innerHTML = text;	
}



//The "Main" of the program.  gets run onLoad
writeMessage = function(selector){
	var d = new Date();
	setText(d.getTime(),selector);

	getTimeSlot(d, function(timeSlot){
		setText(selector, timeSlot)
	});
}


//Returns what "time slot" we are in.  Morning afternoon, evening
getTimeSlot = function(date, callback){
	var morning = new Date();
	morning.setHours(0);
	var afternoon = new Date();
	afternoon.setHours(12);
	var evening = new Date();
	evening.setHours(18);
	var night = new Date();
	night.setHours(21);

	if(date < afternoon){
		callback("<p class='timeSlot'>Good Morning</p><p>Current Time: " + date + "</p><p class='classRunning'>" + getClassRunning(date) + "</p>");
		return;
	}
	else if(date < evening){
		callback("<p class='timeSlot'>Good Afternoon</p><p>Current Time: " + date + "</p><p class='classRunning'>" + getClassRunning(date) + "</p>");
		return;
	}
	else if(date < night){
		callback("<p class='timeSlot'>Good Evening</p><p>Current Time: " + date + "</p><p class='classRunning'>" + getClassRunning(date) + "</p>");
		return;
	}
	else{
		callback("<p class='timeSlot'>Good Night</p><p>Current Time: " + date + "</p><p class='classRunning'>" + getClassRunning(date) + "</p>");
		return;
	}
	
}

//Returns a string based on whether the class is.
getClassRunning = function(date){
	var startClass = new Date();
	startClass.setHours(14);
	var endClass = new Date();
	endClass.setHours(15, 30);
	if(date.getDay()==4 || date.getDay()==2){
		console.log(date.getDay());
		console.log(date.getHours());
		if(date >= startClass){
			if(date <= endClass){
				return "Get To Class";
			}
			else{
				return "Class was earlier";
				
			}
		}
		return "Class later";
	}
	else{
		return "no class today";
	}
}