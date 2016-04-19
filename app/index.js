const angular = require('angular');
const db = require('elasticsearch');
const ngModule = angular.module('app',[]);

var client = new db.Client({
  host: 'localhost:9200',
  log: 'trace'
});

console.log(client);

client.search({
  method : 'get',
  index: 'peluditos',
  type: 'amigo',
  body: {
    "query" : {
        "term" : { "familia" : "perro" }
       }  
    }
}).then(function (resp) {
    var hits = resp.hits.hits;
	console.log(hits);
}, function (err) {
    console.trace(err.message);
});


//require('./directives')(ngModule);

