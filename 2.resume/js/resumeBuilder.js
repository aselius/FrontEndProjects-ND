/*
This js file contains the JSON for my resume, and the append
portion which appends the elemetns in the JSON to the markup.
*/
/*
TODO:
1. Change skills at a glance to top 7 skills
2. Fix & style bar graph with skills and labels
3. Place proper pictures!
4. Cap image size, and get rid of center content.
*/

var locationsResided = ["Bakersfield, CA, USA","Auckland, New Zealand","Seoul, South Korea"];

var bio =
{
	"name" : "Jaewoo Park",
	"role" : "Front End Developer, Biomedical Engineer, and a Data Enthusiast",
	"contacts" :
	{
		"email" : "jaewoopark91@gmail.com",
		"mobile" : "(832) 446-7770",
		"github" : "aselius",
		"twitter" : "jwp91",
		"location" : "San Ramon, CA"
	},
	"picture" : "images/biopic.jpg",
	"welcome" : "Hi, this is Jaewoo's Bio! (Page still needs some work.)",
	"skills" : ["HTML5/CSS3", "Javascript","Python","C/C++","MATLAB", "Adobe CS",
	"Rapid-Prototyping","Microcontrollers","Bioengineering"]
};

var summary =
{
	"summary" : "I'm a self-taught web developer, and a biomedical engineer by training. \
	I love learning new languages, and learning about new technolgies (not necessarilly just limited \
	to health technolgies). I am a designer and a developer at heart, and topics in my comfort \
	zone include scientific computation, data analysis,	machine learning, front end development, and \
	basic object oriented programming. I am always looking for opportunities to expand my areas of expertise :)"
};

var work =
{
	"jobs" :
	[
		{
			"employer" : "Nanolinea",
			"title" : "Prototype and Development Intern",
			"location" : "Houston, TX",
			"dates" : "February 2015 - May 2015",
			"description" : "Nanolinea is a medical device start-up.\
			 My responsibilities included brainstorming product designs,\
			 rapid prototyping, and performing validation experiments."
		},
		{
			"employer" : "Rice University",
			"title" : "Undergraduate Researcher",
			"location" : "Houston, TX",
			"dates" : "January 2014 - May 2014",
			"description" : "Undergraduate researcher in Imaging Laboratory.\
			I was responsible for developing an automated image analysis\
			algorithm to test MEMS systems for upscale production."
		},
		{
			"employer" : "Samsung Biologics",
			"title" : "Business Development Intern",
			"location" : "Incheon, South Korea",
			"dates" : "June 2013 - August 2013",
			"description" : "Samsung Biologics is a Bio-pharmaceutical company\
			located in South Korea. I was placed in the Drug Products and Business\
			Development department, and my responsibilities included competitor\
			pipeline analysis, reviewing Gantt charts, and analyzing production timelines."
		}
	]
};

var education =
{
	"schools" :
	[
		{
			"name" : "Udacity",
			"location" : "San Francisco, CA",
			"degree" : "Nanodegree",
			"major" : "Front-End Web Developer",
			"date" : "In Progress",
			"courses" : ["", ""]
		},
		{
			"name" : "Udacity",
			"location" : "San Francisco, CA",
			"degree" : "Nanodegree",
			"major" : "Data Analyst",
			"date" : "In Progress",
			"courses" : ["", ""]
		},
		{
			"name" : "Rice University",
			"location" : "Houston, TX",
			"degree" : "Masters in Engineering",
			"major" : "Bioengineering",
			"date" : "May 2015",
			"courses" : ["", ""]
		},
		{
			"name" : "Rice University",
			"location" : "Houston, TX",
			"degree" : "Bachelor of Science",
			"major" : "Bioengineering",
			"date" : "May 2014",
			"courses" : ["", ""]
		}
	],
	"onlineCourses" :
	[
		{
			"title" : "Machine Learning",
			"school" : "Coursera",
			"date" : "April 2015",
			"url" : "https://www.coursera.org/learn/machine-learning"
		},
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"date" : "July 2015",
			"url" : "https://www.udacity.com/course/ud304"
		},
		{
			"title" : "Responsive Web Design Fundamentals",
			"school" : "Udacity",
			"date" : "August 2015",
			"url" : "https://www.udacity.com/course/ud893"
		},
		{
			"title" : "Responsive Images",
			"school" : "Udacity",
			"date" : "August 2015",
			"url" : "https://www.udacity.com/course/ud882"
		},
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"date" : "August 2015",
			"url" : "https://www.udacity.com/course/ud804"
		},
		{
			"title" : "How to Use Git and GitHub",
			"school" : "Udacity",
			"date" : "August 2015",
			"url" : "https://www.udacity.com/course/ud775"
		},
		{
			"title" : "Intro to jQuery",
			"school" : "Udacity",
			"date" : "August 2015",
			"url" : "https://www.udacity.com/course/ud245"
		},
		{
			"title" : "Becoming a Udacity Team Guide",
			"school" : "Udacity",
			"date" : "August 2015",
			"url" : "https://www.udacity.com/course/tg101"
		},
		{
			"title" : "Object-Oriented JavaScript",
			"school" : "Udacity",
			"date" : "August 2015",
			"url" : "https://www.udacity.com/course/ud015"
		},
		{
			"title" : "HTML5 Canvas",
			"school" : "Udacity",
			"date" : "September 2015",
			"url" : "https://www.udacity.com/course/ud292"
		},
		{
			"title" : "Intro to Data Analysis",
			"school" : "Udacity",
			"date" : "January 2016",
			"url" : "https://www.udacity.com/course/ud170"
		},
		{
			"title" : "Website Performance Optimization",
			"school" : "Udacity",
			"date" : "January 2016",
			"url" : "https://www.udacity.com/course/ud884"
		},
		{
			"title" : "Browser Rendering Optimization",
			"school" : "Udacity",
			"date" : "January 2016",
			"url" : "https://www.udacity.com/course/ud860"
		},
		{
			"title" : "Intro to AJAX",
			"school" : "Udacity",
			"date" : "February 2016",
			"url" : "https://www.udacity.com/course/ud110"
		},
		{
			"title" : "JavaScript Design Patterns",
			"school" : "Udacity",
			"date" : "February 2016",
			"url" : "https://www.udacity.com/course/ud989"
		},
		{
			"title" : "Data Wrangling with MongoDB",
			"school" : "Udacity",
			"date" : "February 2016",
			"url" : "https://www.udacity.com/course/ud032"
		}
	]
};

var projects =
{
	"webProjects" : //will add later//
	[
		{
			"title" : "Website Optimization",
			"date" : "January 2016",
			"description" : "Optimized a portfolio template created by Udacity so that there\
			 were no janks and the page achieves 60fps for the animations it has. The pagespeed\
			 score for both pc and mobile were also improved so that they achieved a score above 90.",
			"image" : ["images/perf.jpg"],
			"url" : "https://github.com/aselius/udportfolio"
		},
		{
			"title" : "Frogger",
			"date" : "September 2015",
			"description" : "Replicated the old school Frogger game with custom graphics \
			utilizing a game engine provided by Udacity. Made use of object oriented JavaScript\
			to create the objects required for the game.",
			"image" : ["images/frogger.jpg"],
			"url" : "http://github.com/aselius/frogger-game"
		},
		{
			"title" : "Simple Meme Generator",
			"date" : "September 2015",
			"description" : "Simple Meme Genrator utilizing HTML5 Canvas object. Done by \
			using a simple event listener and by loading input file as a backgroun image \
			on canvas and using stroke text and fill text to juxtapose the text on top of the image.",
			"image" : ["images/fry-meme.jpg"],
			"url" : "https://github.com/aselius/meme-generator"
		},
		{
			"title" : "Resume",
			"date" : "August 2015",
			"description" : "Current page :) Created using a simple html backbone, and a \
			Javascript prompt that appended content using jQuery. Experimented with various \
			js libraries such as d3, and polymer elements.",
			"image" : ["images/resume.jpg"],
			"url" : "https://github.com/aselius/aselius.github.io"
		},
		{
			"title" : "Portfolio Page",
			"date" : "July 2015",
			"description" : "Created a simple portfolio page based on a design mock-up \
			using Bootstrap CSS. Utilized Bootstrap's grid based styling system to create \
			a responsive design for cross-platform view.",
			"image" : ["images/portfolio.jpg"],
			"url" : "https://github.com/aselius/portfolio-page"
		}
	],
	"dataProjects" :
	[
		{
			"title" : "Analyzing the NYC Subway Dataset",
			"date" : "January 2015",
			"description" : "Utilized NumPy/Pandas to analyze the NYC subway dataset to \
			analyze if rain led to more ridership. Extracted target datasets with simple \
			SQL queries and wrangled the data for linear regression. Created figures \
			using the ggplot library in python to illustrate the results of the analysis.",
			"image" : ["images/residual.jpg"],
			"url" : "https://github.com/aselius/DataAnalysisPy"
		},
		{
			"title" : "30 Day Hospital Readmission Algorithm",
			"date" : "February 2015 - May 2015",
			"description" : "Developed a Android application and a standoff device \
			that helps deliver standardized melanoma lesion photos to physicians in \
			communities with a lack of immediate access to healthcare.",
			"image" : ["images/mlfigure.jpg"],
			"url" : "https://github.com/aselius/Medical_ML"
		}
	],
	"bioProjects" :
	[
		{
			"title" : "Melanoma Diagnostics Android Application",
			"date" : "August 2014 - May 2015",
			"description" : "Developed a Android application and a standoff device \
			that helps deliver standardized melanoma lesion photos to physicians in \
			communities with a lack of immediate access to healthcare.",
			"image" : ["images/melanoma.jpg"]
		},
		{
			"title" : "Micro Actuation Detection Algorithm for MEMS",
			"date" : "February 2014 - May 2014",
			"description" : "Developed an automation algorithm that reads delimited text \
			output and detects/calculates micro actuation in focal field. Developed for use \
			in MEMS experimentation set-ups (Developed in MATLAB)",
			"image" : ["images/mems.jpg"]
		},
		{
			"title" : "Bubble Bi-level Pressure Device",
			"date" : "August 2013 - May 2014",
			"description" : "Developed a low cost breathing aid that can output two \
			levels of pressure for inhalation and exhalation. Target market was low \
			resource communities, mainly emerging markets.",
			"image" : ["images/breatheasy-2.jpg"]
		},
		{
			"title" : "3D Scaffold in real tissue based 3D model",
			"date" : "November 2013 - December 2013",
			"description" : "Simulated a 3D model of the brain using open source MRI data \
			and filled a cavity with a tesselated polygon chain, which could theoretically \
			act as scaffolds that would facilitate tissue migration.",
			"image" : ["images/scaffold.jpg"]
		},
		{
			"title" : "Pediatric Transcatheter Mitral Valve",
			"date" : "January 2012 - March 2012",
			"description" : "Drafted a proposal for the development of a less invasive \
			self expanding mitral valve for pediatrics.",
			"image" : ["images/valve.jpg"]
		},
	]
};

bio.displayName = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedNameRole = formattedName + formattedRole;
	$("#header").prepend(formattedNameRole);
};

bio.displayName();

bio.displayContact = function() {
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcome);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	var formattedContact = formattedEmail + formattedMobile + formattedGithub + formattedTwitter + formattedLocation;
	$("#contacts").append(formattedWelcome);
	$("#contacts").append(formattedContact);
	$("#contacts").append("</ul>");
	$("#footerContacts").append(formattedContact);
};

bio.displayContact();

bio.displayPicture = function() {
	var formattedbioPic = HTMLbioPic.replace("%data%",bio.picture);
	$("#profilePic").append(formattedbioPic);

	/*var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcome);
	$("#contacts").append(formattedWelcome);*/
};

bio.displayPicture();

bio.displaySkills = function() {
	if(bio.skills.length > 0) {
		$("#skillOverview").append(HTMLskillsStart);
		for (i=0; i<bio.skills.length; i++){
			var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
		$("#skillOverview").append("<br>");
	}
};

bio.displaySkills();

// $("#header").append(internationalizeButton);

summary.displaySummary = function() {
	var formattedSummary = HTMLsummary.replace("%data%", summary.summary);
	$("#biosummary").append(formattedSummary);
};

summary.displaySummary();

bio.displaySkillsDetailed = function() {
	$("#detailedSkills").append(HTMLdetailedSkillStart);
	$("#detailedSkills").append("<br>");
};

bio.displaySkillsDetailed();

projects.display = function()
{
	for (var webProject in projects.webProjects)
	{
		$("#webProjects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.webProjects[webProject].title)
			.replace("#",projects.webProjects[webProject].url);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.webProjects[webProject].date);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.webProjects[webProject].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.webProjects[webProject].image.length > 0){
			for (image in projects.webProjects[webProject].image)
			{
				var formattedImage = HTMLprojectImage.replace("%data%",projects.webProjects[webProject].image[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
		$(".project-entry:last").append("<hr>");
	}
	for (var dataProject in projects.dataProjects)
	{
		$("#dataProjects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.dataProjects[dataProject].title)
			.replace("#",projects.dataProjects[dataProject].url);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.dataProjects[dataProject].date);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.dataProjects[dataProject].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.dataProjects[dataProject].image.length > 0){
			for (image in projects.dataProjects[dataProject].image)
			{
				var formattedImage = HTMLprojectImage.replace("%data%",projects.dataProjects[dataProject].image[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
		$(".project-entry:last").append("<hr>");
	}
	for (var bioProject in projects.bioProjects)
	{
		$("#bioProjects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.bioProjects[bioProject].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.bioProjects[bioProject].date);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.bioProjects[bioProject].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.bioProjects[bioProject].image.length > 0){
			for (image in projects.bioProjects[bioProject].image)
			{
				var formattedImage = HTMLprojectImage.replace("%data%",projects.bioProjects[bioProject].image[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
		$(".project-entry:last").append("<hr>");
	}
	$("#projects").append("<br>");
};

projects.display();

work.displayWork = function() {
	for (var jobs in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[jobs].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[jobs].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[jobs].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[jobs].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[jobs].description);
		$(".work-entry:last").append(formattedDescription);
	}
	$("#workExperience").append("<br>");
};

work.displayWork();

education.display = function() {
	for (var schools in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%",education.schools[schools].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[schools].degree);
		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);

		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[schools].date);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[schools].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[schools].major);
		$(".education-entry:last").append(formattedMajor);
	}
	$("#education").append("<br>");
};
education.display();

education.displayOnline = function() {
	$("#education").append(HTMLonlineClasses);
	for (var onlineCourses in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourses].title)
			.replace("#",education.onlineCourses[onlineCourses].url);
		var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourses].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);

		var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourses].date);
		$(".education-entry:last").append(formattedDates);
	}
	$("#education").append("<br>");
};
education.displayOnline();


$("#mapDiv").append(googleMap);

/* Practice with js functions :)
console.log(name[0].toLowerCase());
console.log(name.slice(3));
*/

/* D3 tests */

var chart = d3.select("#detailedSkills")
	.append("div")
	.attr("id", "chart")
	.append("g");

var margin = {top: 30, right: 10, bottom: 30, left: 10},
	width = parseInt(d3.select('#chart').style('width'), 10),
	width = width - margin.left - margin.right,
	height = 500,
	barheight = 40;


var dataProgramming =
	[
	{"skill" : "HTML/CSS", "conf" : "70"},
	{"skill" : "JS/JQuery/d3", "conf" : "60"},
	{"skill" : "Git", "conf" : "60"},
	{"skill" : "MATLAB", "conf" : "80"},
	{"skill" : "Python/Pandas/NumPy", "conf" : "50"},
	{"skill" : "C/C++", "conf" : "30"},
	{"skill" : "Adobe Creative Suites", "conf" : "80"},
	{"skill" : "LaTeX", "conf" : "40"},
	];

var widthScale = d3.scale.linear()
	.domain([0, 100])
	.range([0, width]);

var heightScale = d3.scale.ordinal();

var colorScale = d3.scale.linear()
	.domain([0, 100])
	.range(["blue", "purple"]);

var axis  = d3.svg.axis()
	.scale(widthScale);

var canvas = d3.select("#chart")
	.append("svg")
	.attr("class", "center-content")
	.attr("width", width)
	.attr("height", height)
	//.style("border", "1px dotted silver")

var bars = canvas.selectAll("rect")
	.data(dataProgramming)
	.enter()
		.append("rect")
		.attr("class", "percent")
		.attr("width", 0)
		.attr("height", barheight )
		.attr("y", function(d, i) { return i * (barheight + 5); } );

var text = canvas.selectAll("text")
	.data(dataProgramming)
	.enter()
		.append("text")
		.attr("y", function(d,i) { return i * (barheight + 5) + 24; } )
		.text(function (d) { return d.skill; } )
		.attr("fill", "#fff")
		.attr("transform", "translate(5,0)");

bars.transition()
	.duration("4000")
	.attr("width", function(d) { return widthScale(d.conf); } )
	.each("end", function() { d3.select(this).attr("fill", function(d) { return colorScale(d.conf); } ); } );

canvas.append("g")
	.attr("transform","translate(0," + (( (barheight + 5) * dataProgramming.length) - 5) + ")" )
	.attr("class", "xAxis")
	.call(axis);

d3.select(window).on('resize', resize);

function resize() {
	// update width
	width = parseInt(d3.select('#chart').style('width'), 10);
	width = width - margin.left - margin.right;

	// resize the chart
	widthScale.range([0, width]);
	d3.select(canvas.node().parentNode)
		.style("height", (heightScale.rangeExtent()[1] + margin.top + margin.bottom) + "px")
		.style("width", (width + margin.left + margin.right) + "px");

	canvas.selectAll("rect.percent")
		.attr("width", function(d) { return widthScale(d.conf); });

	// update axes
	chart.select("center-content")
		.attr("width", width);
	canvas.select(".xAxis").call(axis.orient("bottom"));

	console.log("window has resized")
}