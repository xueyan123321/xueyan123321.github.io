var initialMarkers=[
{
	"title":"东冠社区",
	'lng':120.170921,
	'lat':30.174058
},
{
	"title":"浙江工业大学屏峰校区",
	"lng":120.044132,
	"lat":30.231677
},
{
	"title":"杭州火车站",
	"lng":120.188008,
	"lat":30.249638
}
];

var Marker=function(data){
	var self = this;
	self.title = data.title;
	self.lat = data.lat;
	self.lng = data.lng;
	self.content= '';
	self.visible= ko.observable(true);

	var placePOI="http://api.map.baidu.com/place/v2/search"+"?"+$.param({
		"q":"公交车站",
		"location":self.lat+","+self.lng,
		"radius":"2000",
		"output":"json",
		"ak":"N1IZ9Xhv6zHik5Lqetz0OKGS3KXkCehv"
	});

	$.ajax(placePOI,{
		'dataType':"jsonp"
	}).done(function(data){
		console.log(data);
		self.content = '<h2>'+self.title+'</h2>'
						+'<p>'+data.results[0].address+'</p>'
	}).fail(function(){
		console.log("fail to connect the Web Server");
	})

	self.toggleBounce=function(markerItem){
			markerItem.setAnimation(BMAP_ANIMATION_BOUNCE);
			setTimeout(function(){
				markerItem.setAnimation(null);
			},1400);
	}

	self.marker = new BMap.Marker({
			"lng":self.lng,
			"lat":self.lat
		},{
			"title":self.title
		}
	);
	map.addOverlay(self.marker);

	self.clickTitle = function(){
		infoWindow.setContent(self.content);
		var point=new BMap.Point(self.lng,self.lat);
		map.openInfoWindow(infoWindow,point);
		self.toggleBounce(self.marker);
	};

	self.markerVisible=ko.computed(function(){
		if(self.visible())
		{
			map.addOverlay(self.marker);  
		}
		else
		{
			map.removeOverlay(self.marker);
		}
	},self);

}

var ViewModel=function(){
	var self=this;
	self.markerList=ko.observableArray();


	initialMarkers.forEach(function(markerItem){
		self.markerList.push(new Marker(markerItem));
	});

	self.filterValue=ko.observable('');
	self.markFilter=ko.computed(function(){
		return ko.utils.arrayFilter(self.markerList(),function(markerItem){
			if(!self.filterValue()||(markerItem.title.indexOf(self.filterValue())>-1))
			{
				markerItem.visible(true);
				return true;
			}
			else
			{
				markerItem.visible(false);
				return false;
			}

		})

	},self);
	self.toggleList=function(){
		document.getElementById('list').classList.toggle("list-toggle");
		console.log(self.markerList().length>1);
	}

}

var map;
var infoWindow;
var initMap=function(){
	// 载入全屏地图
	map = new BMap.Map("map");
	map.centerAndZoom("杭州",12);
	map.addControl(new BMap.NavigationControl());
	map.addControl(new BMap.ScaleControl());
	map.addControl(new BMap.OverviewMapControl());
	map.addControl(new BMap.MapTypeControl());
	map.setCurrentCity("杭州");
	// 创建信息窗口
	infoWindow = new BMap.InfoWindow({
		content:''
	});
	ko.applyBindings(new ViewModel());
}
initMap();