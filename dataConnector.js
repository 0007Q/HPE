/**
 * Created by dad on 06/07/2017.
 */

var pg = require('pg');
var pgp = require('pg-promise');

var conString = "postgres://postgres:postgres@52.178.47.198:5432/nnm";
var client = new pg.Client(conString);




client.connect();

var query = client.query('SELECT * FROM public.nms_author');

query.on('row', function(row){
   console.log(row);
});

query.on('end', function(){
    client.end();
});