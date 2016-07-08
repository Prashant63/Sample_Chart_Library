app.controller('mineWhat',["$scope",function($scope){
	$scope.labels = ["IPAD", "DESKTOP", "MOBILE"];
	$scope.data = [35, 16, 49];
	$scope.colors = ["#8CD198", "#FB6F70","#FFB377"];
	$scope.options = { segmentShowStroke: false,
				       animateRotate: true,
				       animateScale: false,
				       percentageInnerCutout: 50,
				       multitooltiptemplate : "<%= value %>%"
				   };

	$scope.retailProductDetail = {
		"name" : "TWISTED BOOTS",
		"views" : "10989",
		"purchase" : "8908",
		"rate" : "3.5",
		"revenue" : "54274",
		"img": "image/boot.jpg"
	};

	var init = function(){
		$scope.retailProduct = [];
		for(var i = 0; i < 4; i++){
			$scope.retailProduct.push($scope.retailProductDetail);
		}
		$scope.revenueData = [{
								"source" : "facebook.com",
								"revenue": "6090"
							},{
								"source" : "quora.com",
								"revenue": "3045"
							},{
								"source" : "twitter.com",
								"revenue": "2284"
							},{
								"source" : "email",
								"revenue": "1675"
							},{
								"source" : "organic",
								"revenue": "1370"
							},{
								"source" : "direct",
								"revenue": "1370"
							}];
	}

	init();
}]);