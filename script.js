var data=['Phone6','Ipad','三星笔记本','佳能相机','惠普打印机','谢谢参与','50充值卡','1000元超市购物券'],
	timer=null,
	flag=0;
	

window.onload=function(){
	var	play=document.getElementById('play'),
		stop=document.getElementById('stop');
		
	//开始抽奖
	play.onclick=playFun;
	//停止抽奖
	stop.onclick=stopFun;
	
	//键盘事件
	document.onkeyup=function(event){
		event=event||window.event;
		if(event.keyCode==13){
			if(flag==0){
				playFun();
				flag=1;
			}else{
				stopFun();
				flag=0;
			}
		}
	}
}

function playFun(){
	var play=document.getElementById('play');		//这里的this指的是play的按钮
	
	var title=document.getElementById('title');
	clearInterval(timer);
	timer=setInterval(function(){
		var random=Math.floor(Math.random()*data.length);
		title.innerHTML=data[random];
	},50);
	play.style.background='#ccc';
}

function stopFun(){
	clearInterval(timer);
	var play=document.getElementById('play');
	play.style.background='#036';
}