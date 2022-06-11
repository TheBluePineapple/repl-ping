const fetch = require("node-fetch");
const cors = require('cors');
const express = require('express');
const app = express();

const names = ["bot"];//just put NAMES of repls in array
var ping = function(minutes=0){
	setTimeout(()=>{
		for(var i = 0;i<names.length; i++){
			// console.log(`https://${names[i]}.blu3pineappl3.repl.co/ping`)
			fetch(`https://${names[i]}.blu3pineappl3.repl.co/ping`)
			.then(res=>res.json())
			.then(data=>console.log(data))
			.catch(err=>console.log(err))
		}
	},minutes*1000*60); 
}
ping();

//SETUP GET ENDPOINT
var corsOptions = {
 //CHANGE TO YOUR USERNAME    ↓↓↓↓↓↓↓↓↓↓↓↓↓ 
	origin:/(https:\/\/)(.*?)(\.blu3pineappl3\.repl\.co)/g,
  optionsSuccessStatus: 204
}
app.get('/ping',cors(corsOptions), (req, res) => {
 res.json({data:"pong(from ping-1)"});
	ping(15);
});
app.get('/', (req, res) => {
  res.send("Express app up and running");
});
app.listen(8080, () => {
  console.log('server started');
});
