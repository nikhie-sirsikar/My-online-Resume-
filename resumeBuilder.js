/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
 	"name" : "Nikhita sirsikar",
 	"role" : "System Engineer",
 	"contacts" : {
 		"mobile" : "+91809 527 1234",
 		"email" : "nikhitasirsikar701@gmail.com",
 		"github" : "nikhie-sirsikar",
 		"location" : "Karnataka India"
 	},
 	"welcomeMessage" : "Hello.",
 	"skills" : [
 	"Good leader", "soft skills", 
 	],
 	"bioPic" : "images/me.jpg"
 };

 var work = {
	"jobs" : [
	{
		"employer": "Infosys Ltd",
		"title": "Systems Engineer",
		"dates": "February 2017-Future",
		"description":"Systems engineering uses a host of tools that include modeling and simulation, requirements analysis and scheduling to manage complexity. Systems engineering is an interdisciplinary field of engineering and engineering management that focuses on how to design and manage complex systems over their life cycles."
	},
	{

		"employer": "Infosys Ltd",
		"title": "Systems Engineer",
		"dates": "February 2017-Future",
		"description":"Systems engineering uses a host of tools that include modeling and simulation, requirements analysis and scheduling to manage complexity. Systems engineering is an interdisciplinary field of engineering and engineering management that focuses on how to design and manage complex systems over their life cycles."
	}
	]
};


var projects = {
	"projects": [{
	"title": "Systems Engineer",
	"dates" : "February 2017-Future",
	"description" : "Systems Engineer" 

	}]
};





var education = {
	"schools" : [
	{
		"name" : "B. V. Bhoomraddi College ",
		"city" : "Hubli, UK, Karnataka",
		"degree" : "BE",
		"majors" ; ["BT"],
		"dates" : 2016,
		"url" : "http://example.com"
	},
	{
		"name" : "Divekar Science College",
		"city" : "Karwar, UK, Karnataka",
		"degree" : "PU",
		"majors" : ["SC"],
		"dates" : 2012,
		"url" : "http://example.com"
	}
	],
	"onlineCourses" : [
	{
		"title" : "JavaScript Crash course",
		"school" : "Udacity",
		"dates" : 2014,
		"url" : "http://www.udacity.com/course/ud804"

	}
	]
}







$ ("#main").append(bio.name);
$ ("#main").append(bio.role);
$ ("#main").append(bio.contacts);
$ ("#main").append(bio.welcomeMessage);
$ ("#main").append(bio.bioPic);
$ ("#main").append(bio.name);
$ ("#main").append(bio.name);
$ ("#main").append(bio.name);
$ ("#main").append(bio.name);

var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);




 //$(#main).append(bio.name);

 //bio.city = "Mountain View";
 //bio.email = "james.williams@udacity.com";

// bio["city"] = "Mountain View";
 //bio["email"] = "james.williams@udacity.com";

 //$("#main").append(bio["city"]);


/*
 var work = {};
 work.position = "Course developer";
 work.employer = "Udacity";
 work.years = 0.3;

 var education = {};
 education["name"] = "Nova Southeastern University";
 education["years"] = "2005-2013"
 education["city"] = "Fort Lauderdale, FL, US";

 $("#main").append(work["position"]);
 $("#main").append(education.name);
 


 
 
 $("#main").append(work["position"]);
 $("#main").append(education.name);

*/

