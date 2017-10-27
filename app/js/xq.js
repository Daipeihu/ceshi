window.onload=function(){
		var nav=document.getElementById("nav")
		var l=document.getElementById("l");
		var ul_list=document.getElementById("ul_list");
		var zy=document.getElementById("zy");
		var flag=true;
		document.addEventListener("touchmove",function(ev){
				ev.preventDefault()
			})
		function getstyle(obj,attr){
				return getComputedStyle(obj,null)[attr];
			}
		var w=parseInt(getstyle(nav,"width"));
		console.log(w)
		l.addEventListener("touchstart",function(ev){
//			alert("r")
			ev.preventDefault();
			if(flag){
					zy.style.transform="translate3d("+w+"px,0,0)";
					flag=false;
			}else{
					zy.style.transform="translate3d(0,0,0)";
					flag=true;
				}
		})
		
		$(".top").on("touchstart",function(){
			$(".box").scrollTop({
				top:0
			})
			console.log($(".box").scrollTop())
		})
		
		
	$("#active").on("touchstart",function(){
				$(".telCon").slideDown();
				console.log("a")
			})
			$("#cancel").on("touchstart",function(){
				$(".telCon").slideUp();
			})
	
}
