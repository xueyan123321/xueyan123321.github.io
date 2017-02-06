var initialMarkers=[
{
	"title":"东莞社区",
},
// {
// 	"title":"浙江工业大学屏峰校区"
// },
// {
// 	"title":"杭州火车站"
// }
];

var ViewModel=function(){
	var self=this;
	self.markerList=ko.observableArray();


	initialMarkers.forEach(function(markerItem){
		self.markerList.push(markerItem);
	});

	self.filterValue=ko.observable('');
	// self.visible=ko.computed(function(){

	// },self);
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