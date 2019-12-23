//function lunbo(){
//	var width = document.body.offsetWidth;        			//获取宽度
//	var lbul = document.querySelector('.ul_lb');  			//获取存放图片ul标签
//	var luli = document.querySelectorAll('.ul_lb1 li');      //获取索引li
//
//  // 定义 index 记录 当前的 索引值
//	// 默认 我们的ul 已经 往左边 移动了 一倍的宽度
//	// (为什么一位最左边的图片 是用来做无限轮播的 不希望用户看到) 所以 index =1
//	var index = 1;
//
//  // 抽取的代码 提升代码的可读性,以及 降低维护的难度
//	var startTransition = function () {
//		lbul.style.transition = 'all .3s';
//	}
// 
//	var endTransition = function () {
//		lbul.style.transition = '';
//	}
// 
//	// 由于 移动的距离 无法确定 所以提取为参数
//	var setTransform = function (distance) {
//		lbul.style.transform = 'translateX('+distance+'px)';
//	}
//
//  //开启定时器setInterval
//  var timeId = setInterval(function(){
//  	
//  //index累加	
//  index++;
//  
//  //开启过渡，放进来就过渡，保证一直存在
//  startTransition();
//  
//  
//  //修改ul位置
//  setTransform(index*width-1);
//  
//  },1000);
//  
//  //添加一个监听器，用来监听过渡是否结束
//  lbul.addEventListener('webkitTransitionEnd',myfunction);
//  function  myfunction(){
//  	
//  	//判断index大小
//  	if(index>5){
//  		index = 1;
//  		
//  		//关闭过渡   		
//  		endTransition();
//  		//修改ul位置
//  		setTransform(index*width-1);
//  	}else if(index<1){
//  		//index小于1调到倒数第二张
//  		index = 5;
//  		
//  		//关闭过渡
//  		endTransition();
//  		//修改ul位置
//  		setTransform(index*width-1);
//  		
//  	}
//  	  //修改  获取索引li标签的class
//  	  for(var i = 0;i<luli.length;i++){
//  	  	luli[i].className='';
//  	  }
//  	  luli[index-1].className='mmm';
//  	  
//  }
//}
// 
//var aLi = document.querySelectorAll('.ul_lb li');
//			var span = document.querySelectorAll('.linebar span');
//			var imgbox = document.querySelector('.div_center_img');
//			var aName=[];//存放元素名字
//			var index=0;//
//			setColor();
//			for(var item of aLi){
//				//for of item代表的是ali数组里的每一个元素
//				//console.log(item);
//				aName.push(item.classList[0]);
//				//console.log(aName);	
//			}
//			  function nextPic(){   //向下翻页
//			  	aName.unshift(aName[4]); //把数组最后一个值复制并插入到数组第一个元素
//			  	aName.pop();//删除数组最后一个元素
//			  	for(var i=0,len=aLi.length;i<len;i++){
//			  		//预存数组长度以减少循环语句的性能消耗
//			  		aLi[i].setAttribute('class',aName[i]);
//			  		//重新给每个元素设置新的名字
//			  	}
//			  	index++;
//			  	if(index>4)index=0;
//			  	setColor();
//			  }
//			  function prePic(){
//			  	aName.push(aName[0]);
//			  	aName.shift();//删除第一个元素
//			  	for(var i =0,len=aLi.length;i>len;i++){
//			  		aLi[i].setAttribute('class',aName[i]);
//			  	}
//			  	index--;			  	
//			  	if(index<0)index=4;
//			  	setColor();
//			  }
//            
//            function setColor(){
//            	for(var item of span){
//            		item.style.backgroundColor="#ccc";
//            	}
//            	span[index].style.backgroundColor="red";
//            }
//           
//            
//            imgbox.addEventListener('click',function(ev){
//            	ev = ev||window.event;
//            	var elv = ev.target.parentNode;//鼠标事件
//            	var elvName=elv.classList[0];
//            	switch(elv.classList[0]){
//            		case 'list1':
//            		  prePic();
//            		  break;
//            		case 'list3':
//            		  nextPic();
//            		  break;
//            	}
//            },);