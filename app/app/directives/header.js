module.exports = function(ngModule){

	ngModule.directive('header',function(){
		require('./header.css');
		return{
			restrict : 'E',
			scope : {},
			template : require('./header.html'),
			controllerAs : 'vm',
			controller : function(){
				var vm = this;
				vm.gretting = "hola";
			}
		};
	});
};