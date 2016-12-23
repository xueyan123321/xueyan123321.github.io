// $('#themeImg li:first-child').click(function(){
// 	 $('#themeImg img').attr('src','image/前端图标.jpg');
// })

// $('#themeImg li:nth-child(2)').click(function(){
// 	 $('#themeImg img').attr('src','image/火影忍者.jpg');
// })
var themeImgLi= $('#themeImg li');


var imgSrc=['image/前端图标.jpg','image/火影忍者.jpg','image/udacity.jpg'];


for(var i=0;i<imgSrc.length;i++)
{
	themeImgLi.eq(i).click(
		(function(){
			var j=i;
			return function(){
				themeImgLi.css('background-color','grey');
				$(this).css('background-color','yellow');
				$('#themeImg img').attr('src',imgSrc[j]);
			}
		})(i));
}

var tick=0;//设置main函数调用tick数,每调用一次增加1。
var index=0;//更换第几个换灯片。
function main(){
		tick++;
		if(tick===240)//当增加到120时，更换图片。
		{
			themeImgLi.css('background-color','grey')
			themeImgLi.eq(index).css('background-color','yellow');
			$('#themeImg img').attr('src',imgSrc[index]);
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



