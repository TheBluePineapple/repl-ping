## Instructions  
- Clone [this project](https://replit.com/@Blu3Pineappl3/ping-1#index.js)
- Change regex in corsOption object to your username so only your repls can ping it
- Add name of repl to environment variable('names')
- Make sure to change the version of node-fetch to ^2.6.6

All you have to do is add the name to the slightly unnecessary env variable, and this piece of code to the project
```js
const express = require('express');
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');/

              // ↓↓↓↓↓↓↓↓↓↓↓↓↓ replace with your username
var username = "blu3pineappl3";

app.get('/ping', cors({ origin: `https://ping-1.${username}.repl.co/`, optionsSuccessStatus: 204}), (req, res) => {
  res.json({data:"pong(from bot)"});
  fetch(`https://ping-1.${username}.repl.co/ping`)
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
});
app.get('/',(req, res) => {
  res.send("Express app up and running");
});
app.listen(8080, () => {
  console.log('server started');
});
```
