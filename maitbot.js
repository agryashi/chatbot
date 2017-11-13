//Create your maitbot

//require libraries
var restify= require("restify");
var botbuilder = require("botbuilder");

//create a server,listen on 3456
var server = restify.createServer();
server.listen(3456, function(){
  console.log("Listening on 3456");
});

//Create a ChatConnector
var connector = new botbuilder.ChatConnector();

//Create a universal bot and connect to ChatConnector
var bot = new botbuilder.UniversalBot(connector);

//Send the request to ChatConnector
server.post("/", connector.listen());

//Bot will respond a dialog
bot.dialog("/",function(session){
//retrieve the message
var msg = session.message.text.toLowerCase();

//Retriaval based model
if(msg.indexOf("mait")> -1){
  if(msg.indexOf("fees")> -1){
    session.send("The fees is INR 100000/- only");
  }else if(msg.indexOf("website")> -1){
    session.send("http://www.mait.ac.in");
  }

}else{
  //default answer
  session.send("I dont understand.Call me on 9__________8");

}
});
