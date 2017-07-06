/**
 * Created by dad on 06/07/2017.
 */

var pg = require('pg');

//var x = getRows();
//console.log("This is a " + getRowCount());
getRows();
getRowCount();
writeRows();

//console.log(x);

function getRowCount(){
    var conString = "postgres://postgres:postgres@52.178.47.198:5432/nnm";
    var client = new pg.Client(conString);
    var columnCount = "";

    client.connect();

    client.query("SELECT * FROM public.nms_author", function(err, result){
        columnCount = result.rows.length;
        console.log("LDL %d", columnCount);
        client.end();
    });

}

function getRows(){
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
}

function writeRows(){
    var outConString = "postgres://postgres:postgres@52.178.47.198:5432/nhs";
    var client = new pg.Client(outConString);
    var queryString = "INSERT INTO test(rowcount) VALUES('77')";

    client.connect();

    var query= client.query(queryString);

    query.on('row', function(row, result){
        console.log(result);
        console.log(row);
    });

    query.on('end', function(){
        client.end();
    });
}