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
	"skills":["English","programming"]
//标识符
    "contactsway":"contact";
    "info":"info";
    "mobileMark":"mobile";
    "locationMark":"Hangzhou";
    "skillsGlance":"Skills at a Glance";
}

var cBio={
	"name":"薛琰",
	"role":"网站开发",
	"contacts":{
		"mobile":"15355458156",
		"email":"1152991535@qq.com",
		"github":"xueyan123321",
		"location":"杭州",
	},
	"bioPic":"images/fry.jpg",
	"welcomeMessage":"欢迎",
	"skills":["英语","编程"]
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

var cWork={
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

//自我描述变成中文

cBio.changeToChinese=function(){
	$('#name').text(this.name);
	$('#header span:first').text(this.role);
	console.log(this.contacts.location);
	$('#header li:eq(0) .orange-text').text('联系方式');
	$('#header li:eq(0) .white-text').text('信息');
	$('#header li:eq(1) .orange-text').text('移动电话');
	$('#header li:eq(3) .orange-text').text('位置');
	$('#skills-h3').text('技能浏览');
	$('#header li:eq(3) .white-text').text(this.contacts.location);
	$('.welcome-message').text(this.welcomeMessage);
	$('#skills li:eq(0) span').text(this.skills[0]);
	$('#skills li:eq(1) span').text(this.skills[1]);
}

bio.changeToEnglish=function(){
	$('#name').text(this.name);
	$('#header span:first').text(this.role);
	console.log(this.contacts.location);
	$('#header li:eq(0) .orange-text').text('contact');
	$('#header li:eq(0) .white-text').text('info');
	$('#header li:eq(1) .orange-text').text('mobile');
	$('#header li:eq(3) .orange-text').text('location');
	$('#skills-h3').text('Skills at a Glance');
	$('#header li:eq(3) .white-text').text(this.contacts.location);
	$('.welcome-message').text(this.welcomeMessage);
	$('#skills li:eq(0) span').text(this.skills[0]);
	$('#skills li:eq(1) span').text(this.skills[1]);
}

function translateTheLanguage(){
	$('#name').text(this.name);
	$('#header span:first').text(this.role);
	console.log(this.contacts.location);
	$('#header li:eq(0) .orange-text').text(this.contactsway);
	$('#header li:eq(0) .white-text').text(this.info);
	$('#header li:eq(1) .orange-text').text(this.mobileMark);
	$('#header li:eq(3) .orange-text').text(this.locationMark);
	$('#skills-h3').text(this.skillsGlance);
	$('#header li:eq(3) .white-text').text(this.contacts.location);
	$('.welcome-message').text(this.welcomeMessage);
	$('#skills li:eq(0) span').text(this.skills[0]);
	$('#skills li:eq(1) span').text(this.skills[1]);
}
// cBio.changeToChinese();

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

$("#main").append(chineseButton);

$("#button").click(function(){
	if($('#button').text()==="变成中文")
	{
		cBio.changeToChinese();
	}
	else
	{
		bio.changeToEnglish();
	}
})

displayMap=function(){
	console.log(googleMap);
	$("#mapDiv").append(googleMap);
};
displayMap();

