/*
This is empty on purpose! Your code to build the resume will go here.
 */
// var awesomeThoughts;
// awesomeThoughts="I am xueyan and I am awesome!"
// console.log(awesomeThoughts);
// funThoughts=awesomeThoughts.replace("awesome","fun");
// $("#main").append(funThoughts);


var bio={
	"name":"Xue Yan",
	"role":"Web Developer",
	"contacts":{
		"mobile":"15355458156",
		"email":"1152991535@qq.com",
		"github":"xueyan123321",
		"location":"HangZhou"
	},
	"bioPic":"images/fry.jpg",
	"welcomeMessage":"welcome",
	"skills":["dancing","English","programmer"]
}

// var work={};
// work.position="students";
// work.employer="jobs";

// var education={}
// education["name"]="Peking University";
// education["years"]="17";
// $("#main").append(education.years);
// $("#main").append(work["position"]);

var work={
	"jobs":[{
	"employer":"zhejiang University of technology",
	"title":"graduate",
	"location":"HangZhou",
	"date":2016,
	"description":"I have a master degree."

},{
	"employer":"siyuejiaoyu",
	"title":"English Teacher",
	"location":"Hangzhou",
	"date":2016,
	"description":"I am a on-line Teacher."
}]
}

var projects=[{
	"title":"my English qualification",
	"dates":"2016/11/14",
	"description":"I have a lot of English certificates",
	"images":["images/hellibotty","images/gameOfThrone"]
}]


var education={

	"schools":[
	{
		"name":"zhejiang technology of university",
		"location":"Hangzhou",
		"dates":"2013",
		"url":"http://www.zjut.edu.cn",
		"majors":["programing","studying","communication"],
		"minors":["English","arts","musics"]
	},{
		"name":"petroleum high school",
		"location":"puYang",
		"dates":"2003",
		"url":"http://www.hagaozhong.com"
	}
	],
	"onlineCourses":[{
		"title":"Intro to jquery",
		"school":"udacity",
		"dates":"2016/11/14",
		"url":"https//"
	}]
}

bio.displayBio=function(){

	formattedName=HTMLheaderName.replace("%data%",this.name);
	formattedRole=HTMLheaderRole.replace("%data%",this.role);
	formattedContactGeneric=HTMLcontactGeneric.replace("%contact%","contact".toUpperCase());
	formattedContactGeneric=formattedContactGeneric.replace("%data%","info");
	formattedMoble=HTMLmobile.replace("%data%",this.contacts.mobile);
	formattedEmail=HTMLemail.replace("%data%",this.contacts.email);
	formattedGitHub=HTMLgithub.replace("%data%",this.contacts.github);
	formattedLocation=HTMLlocation.replace("%data%",this.contacts.location);
	formattedImage=HTMLbioPic.replace("%data%",this.bioPic);
	formattedWelcome=HTMLwelcomeMsg.replace("%data%",this.welcomeMessage);





	$("#header").append(formattedName);
	$("#header").append(formattedRole);
	$("#header").append(formattedContactGeneric);
	$("#header").append(formattedMoble);
	$("#header").append(formattedGitHub);
	$("#header").append(formattedLocation);
	$("#header").append(formattedImage);
	$("#header").append(formattedWelcome);


	if(bio.skills.length>0)
	{
	// console.log(bio.skills.length);
	$("#header").append(HTMLskillsStart);
	var HTMLskills0=HTMLskills.replace("%data%",bio.skills[0]);
	// console.log(HTMLskills0);
	$("#skills").append(HTMLskills0);
	HTMLskills1=HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(HTMLskills1);
	}
}

bio.displayBio();

work.displayWork=function(){
	work.jobs.forEach(function(element){
	$("#workExperience").append(HTMLworkStart);
	workEmployer=HTMLworkEmployer.replace("%data%",element.employer);
	workTitle=HTMLworkTitle.replace("%data%",element.title);
	theWorkThing=workEmployer+workTitle;
	$(".work-entry:last").append(theWorkThing);
	var formattedDate=HTMLworkDates.replace("%data%",element.date);
	// console.log(formatteddate);
	$(".work-entry:last").append(formattedDate);
	var formattedDescription=HTMLworkDescription.replace("%data%",element.description);	
	// console.log(formattedDescription);
    $(".work-entry:last").append(formattedDescription);

})
}

work.displayWork();
// $(document).click(function(loc){
// 	logClicks(loc.pageX,loc.pageY);
// })

projects.displayProject=function(){
	projects.forEach(function(element){
		$("#projects").append(HTMLprojectStart);
		formattedTitle=HTMLworkTitle.replace("%data%",element.title);
		$(".project-entry:last").append(formattedTitle);
	})

}

projects.displayProject();
function inName(){
		interNa=bio.name.split(" ");
		bio.name=interNa[0].slice(0,1).toUpperCase()+interNa[0].slice(1)+" "+interNa[1].toUpperCase();
		// console.log(bio.name);
		$("#name").remove();
		interNa=HTMLheaderName.replace("%data%",bio.name);
		$("#header").prepend(interNa);
	}

$("#main").append(internationalizeButton);
$("button").click(function(){
	inName();
})

displayMap=function(){
	console.log(googleMap);
	$("#mapDiv").append(googleMap);
};
displayMap();

