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
				vm.star = [
				{
					tipo : 'perro',
					nombre : 'luna',
					genero : 'hembra',
					estado : 'adopcion',
					edad : '2 meses',
					publicado :'2016-03-01 11:23:00',
					historia : 'Este perrito fue encontrado cerca de mi casa y esta buscando hogar',
					email : 'user@gmail.com',
					celular: '314 5678767',
					geoip:'12323424353'
				},
				{
					tipo : 'gato',
					nombre : 'micifu',
					genero : 'macho',
					estado : 'perdido',
					edad : '1 año',
					publicado :'2016-02-01 10:43:00',
					historia : 'Este gato lo encontramos en una casa abandonada.',
					email : 'user2@gmail.com',
					celular: '314 5678767',
					geoip:'12323424353'
				},
				{
					tipo : 'perro',
					nombre : 'polo',
					genero : 'macho',
					estado : 'adopcion',
					edad : '1 año',
					publicado :'2016-03-04 09:23:00',
					historia : 'Acabamos de tener 5 perritos ademas de este',
					email : 'user3@gmail.com',
					celular: '314 5678767',
					geoip:'12323424353'
				}
				];

				console.log(vm.star);
			}
		};
	});
};