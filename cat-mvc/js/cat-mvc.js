	$(function(){
	var model={
		currentCat:{},
		catList:[
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
}


	var octopus={
		init:function(){
			view.init();
		},
		getAllCats:function(){
			return model.catList;
		},
		setCurrentCat:function(i){

			model.currentCat=model.catList[i];
		},
		setCurrentCatState:function(name,url,clicks){
			model.currentCat.name=name;
			console.log(model.currentCat.name);
			model.currentCat.imgSrc=url;
			model.currentCat.clickNumber=clicks;
		},
		getActiveCat:function(){
			return model.currentCat;
		},
		increaseCatclickN:function(){
			model.currentCat.clickNumber++;
		},

	}

	var view={
		//初始化函数，主要完成admin按钮事件的绑定，list的渲染，save按钮事件的绑定。
		init:function(){
			var adminArea=$('form,#save,#cancel');
			adminArea.hide();
			$('#admin').click(function(){
				adminArea.toggle();

			});
			var cats=octopus.getAllCats();
			view.renderList();
           $('#save').click(function(){
           		name=$('#name').val();
           		imgURL=$('#imgURL').val();
           		clicks=$('#clicks').val();
           	  	octopus.setCurrentCatState(name,imgURL,clicks);
           	  	adminArea.hide();
           	  	view.renderList();

           });
           $("#cancel").click(function(){
           		view.renderAdmin();
           })
		},
		//完成图片的渲染和管理区渲染，给图片添加点击事件。
		render:function(){
			var demoImg=$('#demoImg');
			demoImg.empty();
			demoImg.show();
			var activeCat=octopus.getActiveCat();
			demoImg.append("<img src='"+activeCat.imgSrc+"'/>");
			demoImg.append("<p>"+activeCat.name+"</p>");
			$('img').click(function(){
				octopus.increaseCatclickN();
		        $('#clicks').val(activeCat.clickNumber);
			})
			view.renderAdmin();
			$('form,#save,#cancel').show();
		},
		//完成名字列表渲染。
		renderList:function(){
			var cats=octopus.getAllCats();
			$('ul').empty();
			for(var i=0;i<cats.length;i++){
				$('ul').append("<li>"+cats[i].name+"</li>");
				$('ul li').eq(i).click(function(){

					var j=i;
					return function(){
						octopus.setCurrentCat(j);
						view.render();

					}
				}(i));
			}
		},
		//管理区渲染。
		renderAdmin:function(){
			var cat=octopus.getActiveCat();
			$('#name').val(cat.name);
			$('#imgURL').val(cat.imgSrc);
			$('#clicks').val(cat.clickNumber);
		}
	}
	//调用octopus的init()函数完成初始化。
	octopus.init();
})