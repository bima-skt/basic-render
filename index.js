//var http = require('http'); 
//Fungsi kode tersebut adalah untuk mengimpor library http dari node_moduls
var http = require('http');

//membuat server
http.createServer(function(req, res){

    res.end("Selamat Datang Di Wonderland");

//nomer port yang digunakan
}).listen(666);

console.log("666");