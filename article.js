angular.module("articleApp")
.factory("Article", ["$http", function($http){

	var get_default = function(){
		return {
          list: []
		}
	}


    var get_article_list = function(articles){

    	return $http.get('scripts/json/articles.json').success(function (data){
           articles.list = data;
    	});
    };


	return {
		model : {
			get: get_default
		},
		list: {
			get: get_article_list
		}
	}

}
]);
