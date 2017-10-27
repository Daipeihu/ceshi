$(function(){
	function getstyle(obj,attr){
		return getComputedStyle(obj,null)[attr];
	}
	var w=parseInt(getstyle($("nav")[0],"width"));
	var flag=true;
	var flag1=true;
	$("#navbtn").click(function(ev){
		ev.preventDefault();
		if(flag){
			console.log("nav")
			$(".sectionbar").css('transform',"translate3d("+w+"px,0,0)");
		}
		else{
			$(".sectionbar").css('transform',"translate3d(0,0,0)");
		}
		flag=!flag;
	})
	
	
	
	console.log(w)
	
//	spans[0].addEventListener("touchstart",function(ev){
//		
//	})
//	spans[1].addEventListener("touchstart",function(ev){
//		
//		if(flag){
//			box.style.transform="translate3d("+w+"px,0,0)";
//			flag=false;
//		}else{
//			box.style.transform="translate3d(0,0,0)";
//			flag=true;
//		}
//	})
//电话

$("#active").on("touchstart",function(){
				$(".telCon").slideDown();
			})
			$("#cancel").on("touchstart",function(){
				$(".telCon").slideUp();
			})






})




