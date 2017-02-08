var initialMarkers=[
{
	"title":"东冠社区",
	'lat':120.170921,
	'lng':30.174058
},
{
	"title":"浙江工业大学屏峰校区",
	"lat":120.044132,
	"lng":30.231677
},
{
	"title":"杭州火车站",
	"lat":120.188008,
	"lng":30.249638
}
];

var Marker=function(data){
	var self=this;
	self.title=data.title;
	self.lat=data.lat;
	self.lng=data.lng;
	self.content='';
	self.visible=ko.observable(true);

	var =
}

var ViewModel=function(){
	var self=this;
	self.markerList=ko.observableArray();


	initialMarkers.forEach(function(markerItem){
		self.markerList.push(markerItem);
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