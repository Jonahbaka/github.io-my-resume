
//Work JSON 
var work = {
	"jobs":[
		{
			"employer": "Freelance: AppRovers",
			"title": "Front-End Web Developer",
			"location": "Milpitas, CA",
			"dates": "2013 - Present",
			"description": "Perform complete life cycle development of front-end web development, with an emphasis on the requirements gathering, planning, analysis, testing, and acceptance phases for assigned projects. Work with Graphic Designer and Webmaster to translate wireframe designs into code using standards-compliant dynamic HTML5 and CSS3; utilize approved software development platforms, methodologies, tools and languages (HTML/Css,JavaScript, etc.) to create and manage customized web projects. Maintained all company's websites and applications; provided management with updates regarding the status of web-related projects, and participate in discussions and meetings regarding web related projects, Managed a team of 3 and reporting directly to the General manger."
		},
		{
			"employer": "Silicon Valley Peripherals",
			"title": "IT Manager",
			"location": "Freemont , CA",
			"dates": "2015",
			"description": " Developed and managed Business website and e-commerce website using the latest, responsive and efficient web development tools such as HTML5 and Css , Google developer tools, UI frameworks, twitter Bootstraps to develop responsive websites for all devices, Developed localhost server for Silicon Valley peripherals using Lamp and Wamp technology, and MySql, Automated Amazon listings using XML micros, Amazon API (AWS) integration with company website to increase traffic from website to Amazon. Managed a team of 3 and reporting directly to the General manger."
		},
		 
	]
	
};
// Display work json info
work.display = function(){
	
	for (var job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkTitle.replace("%data%", work.jobs[job]["title"]))
								.append(HTMLworkEmployer.replace("%data%", work.jobs[job]["employer"]))
								.append(HTMLworkLocation.replace("%data%", work.jobs[job]["location"]))
								.append(HTMLworkDates.replace("%data%", work.jobs[job]["dates"]))
								.append(HTMLworkDescription.replace("%data%", work.jobs[job]["description"]));
	}
		
}
// Projects JSON
var projects = {
	"projects": [
		{
			"title": "Neighborhood Map",
			"date worked": "Dec, 2015",
			"description": "Neighborhood Map project for Udacity Front-end Web Development Nanodegree",
			"github": "https://github.com/Jonahbaka/github.io-neighborhoodMap.git",
			"demo": "http://jonahbaka.github.io/github.io-neighborhoodMap",
			"progress": 100
		},
		{
			"title": "Arcade Game",
			"date worked": "Dec, 2015",
			"description": "Classic arcade game clone project for Udacity Front-end Web Development Nanodegree",
			"github": "https://github.com/Jonahbaka/github.io-alcadeGame.git",
			"demo": "http://jonahbaka.github.io/github.io-alcadeGame",
			"progress": 100
		},
		{
			"title": "Interactive Resume",
			"date worked": "Dec, 2015",
			"description": "Resume project for Udacity Front-end Web Development Nanodegree",
			"github": "https://github.com/Jonahbaka/github.io-my-resume.git",
			"demo": "http://jonahbaka.github.io/github.io-my-resume",
			"progress": 100
		},
		 {
			"title": "My Portfolio",
			"date worked": "Dec, 2015",
			"description": "Portfolio project for Udacity Front-end Web Development Nanodegree",
			"github": "https://github.com/Jonahbaka/github.io-portfolio.git",
			"demo": "http://jonahbaka.github.io/github.io-portfolio",
			"progress": 100
		},
		 {
			"title": "Dating site form",
			"date worked": "Dec, 2015",
			"description": "Portfolio project for Udacity Front-end Web Development Nanodegree",
			"github": "https://github.com/Jonahbaka/github.io-datingSiteForm.git",
			"demo": "http://jonahbaka.github.io/github.io-datingSiteForm",
			"progress": 100
		},
		 
	]

};
// Display project json info
projects.display = function(){
	var d3Div = new Array(projects.projects.length);
	var progressDiv = new Array(projects.projects.length);

	for (var project in projects.projects){

			$("#projects").append(HTMLprojectStart);

			$(".project-entry:last").append('<div id="div' + project + '"></div>')
										.append(HTMLprojectTitle.replace("%data%", projects.projects[project]["title"]))
										.append(HTMLprojectDates.replace("%data%", projects.projects[project]["date worked"]))
										.append(HTMLprojectDescription.replace("%data%", projects.projects[project]["description"]));
			// display demo or github json info if they exisit
			if (projects.projects[project]["demo"] != undefined )
				$(".project-entry:last").append(HTMLprojectDemo.replace("#", projects.projects[project]["demo"]));
			if (projects.projects[project]["github"] != undefined )
				$(".project-entry:last").append(HTMLprojectGithub.replace("#", projects.projects[project]["github"]));
			
			// call d3 progress chart function
			projects.progressChart(d3Div, progressDiv, project, 'div' + project, projects.projects[project]["progress"]);

	}

}
// project d3 progress chart function
projects.progressChart = function(d3Div, progressDiv, project, container, value) {

	d3Div[project] = d3.select(document.getElementById(container));

	progressDiv[project] = radialProgress(document.getElementById(container))
        .diameter(150)
        .value(value)
        .render();
};

//Bio JSON
var bio = {
	"first name": "Jonah",
	"last name": "Baka",
	"role": "Full-Stack Web Developer",
	"welcome message": "I'm passionate about web design and development, and am currently working as a freelance web developer. Feel free to check out my Github repositories and demo projects. You can also find me on Linkedin and Twitter.",
	"bio pic": " https://lh6.googleusercontent.com/-hskRjyYtl6k/AAAAAAAAAAI/AAAAAAAAAoY/nsyq4GKu4cY/photo.jpg",
	"contacts": 
		{
			"mobile number": "000-000-0000",
			"email": "jonahbaka00@gmail.com",
			"github username": "jonahbaka",
			"twitter handle": "@jonahbaka",
			"location": "Milpitas CA United States"
		},
	"skills": ["HTML", "CSS", "JavaScript", "JQuery", "SQL", "MySQL", "PLSQL"]

};
bio.display = function(){
	var formattedFName = HTMLheaderFName.replace("%data%", bio["first name"].toUpperCase());
	var formattedLName = HTMLheaderLName.replace("%data%", bio["last name"].toUpperCase());
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role.toUpperCase());
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile number"]);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github username"]);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter handle"]);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio["bio pic"]);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio["welcome message"]);

	
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedLName);
	$("#header").prepend(formattedFName);	
	$("#header").append(formattedWelcomeMsg);
	$("#topContacts ul").append(formattedMobile);
	$("#topContacts ul").append(formattedEmail);
	$("#topContacts ul").append(formattedGithub);
	$("#topContacts ul").append(formattedTwitter);	
	$("#topContacts ul").append(formattedLocation);

}
//Education JSON
var education = {
	"schools": [
		{
			"name": "Trade-tech",
			"location": "Los Angeles, CA United Sates",
			"degree": "Computer Information Systems",
			"dates": "December 2013",
			"url": "http://www.lattc.edu"
		},
		 
	],
	"onlineCourses": [
		{
			"title": "Full-Stack Web Development",
			"school": "The Hong Kong University of Science and Technology at Coursera",
			"dates": 2015,
			"url": " https://www.coursera.org/specializations/full-stack"
		},
		{
			"title": "Front-end Web Development",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/nanodegrees"
		}
	],
};
// Display education json info
education.display = function(){
	for (var school in education.schools){	
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school]["dates"]))
									.append(HTMLschoolName.replace("%data%", education.schools[school]["name"]).replace("#", education.schools[school]["url"]))
									.append(HTMLschoolLocation.replace("%data%", education.schools[school]["location"]));
																											
		for(var major in education.schools[school].majors){
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school]["majors"][major]));
		}
	}
	$("#education").append(HTMLonlineClasses);
	// Display online courses
	for (var onlineCourse in education.onlineCourses){	
		var num = education.schools.length + parseInt(onlineCourse);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse]["dates"]))
									.append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse]["school"]))
									.append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse]["title"]))
									.append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse]["url"]));
	}
}
//Map
$("#mapDiv").append(googleMap);

// chartjs library from: http://www.chartjs.org/docs/#polar-area-chart
var polarData = [
  {
    value: 10,
    color:"#F7464A",
    highlight: "#FF5A5E",
    label: "HTML",
    labelcolor: "red"
  },
  {
    value: 8,
    color:"#F06613",
    highlight: "#FF5A5E",
    label: "CSS",
    labelcolor: "orange"
  },
  {
    value: 7,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Javascript",
    labelcolor: "green"
  },
  {
    value: 10,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "SQL",
    labelcolor: "yellow"
  },
  {
    value: 7,
    color: "#949FB1",
    highlight: "#A8B3C5",
    label: "PLSQL",
    labelcolor: "gray"
  },
  {
    value: 7,
    color: "#23582b",
    highlight: "#A8B3C5",
    label: "Git",
    labelcolor: "darker-green"
  },
  {
    value: 7,
    color: "#4D5360",
    highlight: "#616774",
    label: "MySQL",
    labelcolor: "darker-gray"
  }

  ];
// Display a list of skill labels
var skillsChartLabels = function(){
	for (skill in polarData){
	  var skillLabel = polarData[skill].label;
	  var skillLabelColor = polarData[skill].labelcolor;
	  var skillHTML = '<span class="label ' + skillLabelColor + '">' + skillLabel + '</span>';
	  $("#skills-list").append(skillHTML);
	}
}

// Call functions
window.onload = function(){
	var ctx = document.getElementById("skills-chart").getContext("2d");
	window.myPolarArea = new Chart(ctx).PolarArea(polarData, {
  		responsive:false
	});
	// Call skillsChartLabels function defined
	skillsChartLabels();
};
// Call bio, work, projects and education functions
bio.display();
work.display();
projects.display();
education.display();






