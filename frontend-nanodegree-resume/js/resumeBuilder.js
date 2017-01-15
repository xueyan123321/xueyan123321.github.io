/*
This is empty on purpose! Your code to build the resume will go here.
 */



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
	"skills":["English","programming"],
//标识符
    "contactsway":"contact",
    "info":"info",
    "mobileMark":"mobile",
    "locationMark":"Hangzhou",
    "skillsGlance":"Skills at a Glance"
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
	"skills":["英语","编程"],
//标识符
	"contactsway":"联系方式",
	"info":"信息",
	"mobileMark":"移动电话",
	"locationMark":"杭州",
	"skillsGlance":"技能浏览"
}

var projects=[{
	"title":"作品集展示网站",
	"dates":"2016/11/14",
	"description":"展示我的前端作品集"
},{
	"title":"中英文简历",
	"dates":"2016//12/1",
	"description":"能够实现中英文转换的简历"
}]


var education={

	"schools":[
	{
		"name":"浙江工业大学",
		"location":"杭州",
		"degree":"硕士",
		"dates":"2009",
		"url":"http://www.zjut.edu.cn",
		"majors":["信息与通信工程"],
		"minors":["英语"]
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





	$("#header").append(formattedName+formattedRole+formattedContactGeneric+
						formattedMoble+formattedGitHub+formattedLocation+
						formattedImage+formattedWelcome);


	if(bio.skills.length>0)
	{
	$("#header").append(HTMLskillsStart);
	var HTMLskills0=HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(HTMLskills0);
	HTMLskills1=HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(HTMLskills1);
	}
}

bio.displayBio();

//自定义自我简介翻译函数

function bioTranslation(){
	$('#name').text(this.name);
	$('#header span:first').text(this.role);
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

cBio.changeToChinese=bioTranslation;
bio.changeToEnglish=bioTranslation;
cBio.changeToChinese();//初始化为中文，利于百度地图收索。

//项目经历
projects.displayProject=function(){
	projects.forEach(function(element){
		$("#projects").append(HTMLprojectStart);
		formattedTitle=HTMLprojectTitle.replace("%data%",element.title);
		$(".project-entry:last").append(formattedTitle);
		formattedDates=HTMLprojectDates.replace("%data%",element.dates);
		$('.project-entry:last').append(formattedDates);
		formattedDescription=HTMLprojectDescription.replace('%data%',element.description);
		$('.project-entry:last').append(formattedDescription);
	})

}

projects.displayProject();

//教育经历
education.displayEducation=function(){
	    this.schools.forEach(function(element){
		$('#education').append(HTMLschoolStart);
		formattedSchoolName=HTMLschoolName.replace("%data%",element.name);
		$('.education-entry:last').append(formattedSchoolName);
		formattedSchoolDegree=HTMLschoolDegree.replace("%data%",element.degree);
		$('.education-entry:last').append(formattedSchoolDegree);
		formattedDates=HTMLschoolDates.replace("%data%",element.dates);
		console.log(formattedDates);
		$('.education-entry:last').append(formattedDates);
		formattedSchoolLocation=HTMLschoolLocation.replace("%data%",element.location);
		$('.education-entry:last').append(formattedSchoolLocation);
		formattedMajor=HTMLschoolMajor.replace("%data%",element.majors);
		$('.education-entry:last').append(formattedMajor);
	})
}

education.displayEducation();


$("#main").prepend(chineseButton);

$("#button").click(function(){
	if($('#button').text()==="变成中文")
	{
		cBio.changeToChinese();
		$('#button').text("变成英文");
	}
	else
	{
		bio.changeToEnglish();
		$('#button').text("变成中文");
	}
})


var displayMap=function(){
	console.log(googleMap);
	$("#mapDiv").append(googleMap);
};
displayMap();

