// 这个程序主要实现幻灯片更换放映功能


// 需要放映的幻灯片
var imgSrc=['image/前端图标.jpg','image/火影忍者.jpg','image/udacity.jpg'];

// 给幻灯片条目绑定处理事件
var themeImgLi= $('.theme-img li');
for(var i=0;i<imgSrc.length;i++)
{
	themeImgLi.eq(i).click(
		(function(){
			var j=i;
			return function(){
				themeImgLi.css('background-color','grey');
				$(this).css('background-color','yellow');
				$('.theme-img img').attr('src',imgSrc[j]);
			}
		})(i));
}


// 使用requestAnimationFrame实现循环放映
var tick=0;//设置main函数调用tick数,每调用一次增加1。
var index=0;//更换第几个换灯片。
function main(){
		tick++;
		if(tick===240)//当增加到120时，更换图片。
		{
			themeImgLi.css('background-color','grey')
			themeImgLi.eq(index).css('background-color','yellow');
			$('.theme-img img').attr('src',imgSrc[index]);
			tick=0;
			index++;
		}
		window.requestAnimationFrame(main);
		if(index===3)
		{
			index=0;//index重新清零。
		}

}

main();



