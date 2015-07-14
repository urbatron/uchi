function ExampleCtrl($scope){

	var canvas = document.getElementById("myCanvas1");
	var x = canvas.getContext("2d");
	h = canvas.height;
    w = canvas.width;
	x.beginPath();
    x.strokeStyle = "#f1629e";
    x.lineWidth=4;
    x.arc(w/2, w/2+20, w/2, 0, 2 * Math.PI, true);
    x.moveTo(w, h);
    x.lineTo(w, h-40);
    x.moveTo(w, h);
    x.lineTo(w-20, h-30);
    x.stroke(); 


    var canv = document.getElementById("myCanvas2");
	var y = canv.getContext("2d");
	h = canv.height;
    w = canv.width;
	y.beginPath();
    y.strokeStyle = "#f1629e";
    y.lineWidth=4;
    y.arc(w/2, w/2+20, w/2, 0, 2 * Math.PI, true);
    y.moveTo(w, h);
    y.lineTo(w, h-40);
    y.moveTo(w, h);
    y.lineTo(w-20, h-30);
    y.stroke(); 

	$scope.one = Math.random() * (9 - 6) + 6;
	$scope.one = Math.round($scope.one);
	reply = Math.random() * (14 - 11) + 11;
	reply= Math.round(reply);
	$scope.two = reply - $scope.one;

function one(s){
switch (s) {
  case 6:
    w = 237
    break
  case 7:
    w = 277
    break
  case 8:
    w = 316
    break
    case 9:
    w = 355
    break
}
	$("#myCanvas1").animate({width: w},1500)
	setTimeout(function(){$("#oneNumber").show("slow")}, 1500)
	
}

function two(e){
switch (e) {
	case 2:
    r = 80
    break
  case 3:
    r = 118
    break
  case 4:
    r = 156
    break
  case 5:
    r = 194
    break
    case 6:
    r = 232
    break
    case 6:
    r = 270
    break
    case 6:
    r = 308
    break
}

	$("#myCanvas2").animate({width: r},1500)
	setTimeout(function(){$("#twoNumber").show("slow")}, 1500)
	
}
	
	setTimeout(one($scope.one), 1000)

$scope.comparison = function() {
        if($scope.value1 == $scope.one){
		$("#oneNumber").css('display','none')
		$(".view1").show("slow",function(){
			setTimeout(two($scope.two), 1000);
		})
		$(".example span:first-child").css('background','#ffffff')
	}else{
		$(".example span:first-child").css('background','#f7a950')
	}
}
$scope.comparison2 = function() {
if($scope.value2 == $scope.two){
		$("#twoNumber").css('display','none')
		$(".view2").show("slow")
	$(".example span:nth-child(3)").css('background','#ffffff')
	$(".example span:nth-child(5)").css('display','none')
	$("#reply").show()
	}else{
		$(".example span:nth-child(3)").css('background','#f7a950')
	}
}

$scope.comparison3 = function() {
if($scope.value3 == reply){
		$("#reply").css('color','#1e52e8')
		alert("УРАААААА!!! Ответ Верный!!!")

	}
}

        
	
}


 
   