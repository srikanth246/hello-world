var helloApp = angular.module("helloApp", []);
helloApp.controller("CompanyCtrl", function($scope) {
$scope.companies = [
                    { 'name':'Infosys Technologies',
                    	'employees': 125000,
                    	'headoffice': 'Bangalore'},
                    	{ 'name':'Cognizant Technologies',
	                    	'employees': 100000,
	                    	'headoffice': 'Bangalore'},
	                    	{ 'name':'Wipro',
		                    	'employees': 115000,
		                    	'headoffice': 'Bangalore'},
		                    	{ 'name':'Tata Consultancy Services (TCS)',
			                    	'employees': 150000,
			                    	'headoffice': 'Bangalore'},
			                    	{ 'name':'HCL Technologies',
				                    	'employees': 90000,
				                    	'headoffice': 'Noida'},
                    ];
$scope.addRow = function(){		
	$scope.companies.push({ 'name':$scope.name, 'employees': $scope.employees, 'headoffice':$scope.headoffice });
	$scope.name='';
	$scope.employees='';
	$scope.headoffice='';
};
});


// angular.module("simpleApp", []).controller("simpleCtrl", function($scope) {
// $scope.collection = [   { 'firstname':'aaa',
//                     	   'lastname': 'bbbb',
//                     	    'E-mail ID':'sri.srikanth246@gmail.com',
//                              'Mobile No':9494988930,
//                               'H.No':455-455,
//                                'village': 'gdk',
//                                 'District':'karimnagar'},

//                         { 'firstname':'sfsfsf',
// 	                       'lastname': 'dssfse',
// 	                    	'E-mail ID':'srasas@gmail.com',
// 	                    	 'Mobile No':9489652687,
// 	                    	  'H.No':5552,
// 	                    	   'village': 'dwwww',
// 	                    	    'District':'karimnagar'},

// 	                    { 'firstname':'ddd',
// 		                    'lastname': 'cccc',
// 		                     'E-mail ID':'wswqw@gmail.com',
// 		                       'Mobile No':222222222,
// 		                         'H.No':85544,
// 		                    	  'village': 'dwq',
// 		                           'District':'dwqw'},
// 		                { 'firstname':'fesew',
// 			               'lastname': 'dssfse',
// 			                'E-mail ID':'sriqwswsq@gmail.com',
// 			                 'Mobile No':8555644,
// 		                       'H.No':88547,
// 		                    	'village': 'fsfs',
// 		                         'District':'asas'},
// 			            { 'firstname':'fesew',
// 			                'lastname': 'dssfse',
// 			                 'E-mail ID':'dsawd@gmail.com',
// 			                  'Mobile No':9556455655,
// 		                       'H.No':455-455,
// 		                    	'village': 'wqwq',
// 		                         'District':'karimnagar'}];

// ) 
//};

// $scope.addRow = function(){		
// 	$scope.collection.push({ 'firstname':$scope.firstname, 'lastname': $scope.lastname,'E-mail ID':$scope.E-mail ID,'Mobile No':$scope.Mobile  No,'H.No':$scope.H.No, 'village':$scope.village,'District':$scope.District});
// 	$scope.firstname='';
// 	$scope.lastname='';
// 	$scope.E-mail ID='';
// 	$scope.Mobile No='';
// 	$scope.H.No='';
// 	$scope.village='';
// 	$scope.District='';
// 	$scope.village='';
// };
// )};