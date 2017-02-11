var initialCats=[
		{
			name:"大脸猫",
			imgSrc:"http://img4.duitang.com/uploads/item/201401/24/20140124010752_zTUWB.thumb.600_0.jpeg",
			clickNumber:0
		},{

			name:"黑猫和花猫",
			imgSrc:"http://f.hiphotos.baidu.com/zhidao/pic/item/024f78f0f736afc3ac122811b219ebc4b74512a3.jpg",
			clickNumber:0

		},{

			name:"深沉的猫",
			imgSrc:"http://pic19.nipic.com/20120209/6608733_121902203551_2.jpg",
			clickNumber:0

		},{

			name:"可爱猫",
			imgSrc:"http://img1.juimg.com/150626/330478-150626091T823.jpg",
			clickNumber:0

		},{

			name:"猫宝宝",
			imgSrc:"http://img2.3lian.com/2014/f4/58/d/7.jpg",
			clickNumber:0
		}]

var Cat=function(data){	
		this.clickCount = ko.observable(data.clickNumber);
		this.name=ko.observable(data.name);
		this.imgSrc = ko.observable(data.imgSrc);
		this.imgAttribution = ko.observable("https://www.flickr.com/photos/big");
		this.catLevel=ko.computed(function(){

		if(this.clickCount()<10)
			{return "Newborn";}
		if(this.clickCount()<100)
			{return "Infant";}
		return "Teen";
		},this);

		this.nickNameArray=ko.observableArray([
			"Tababa","T-Bone","Mr.T","Tabitba Tab Cat"
		]);
	}

var ViewModel = function(){
	var self=this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});

	this.currentCat=ko.observable(this.catList()[0]);
	this.setCurrentCat=function(clickedCat){
		console.log(typeof clickedCat);
		self.currentCat(clickedCat);
	}

	this.incrementCounter = function(){
		this.clickCount(this.clickCount()+1);
	};
}

ko.applyBindings(new ViewModel());