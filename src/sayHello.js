
var sayHello = function(){
  this.count =0;
  return this;
}

sayHello.prototype.greet = function(name){
  this.count=this.count+1;
  if (this.count>4){
    return "";
  }
  switch(name){
    case "Good morning":
      return "Good morning";
      break;
    case "Good afternoon":
      return "Good afternoon";
      break;
    case "Good evening":
      return "Good evening";
      break;
    case "Hallo":
      return "Hallo";
      break;
    case "":
      return "Please Login";
      break;
    default:
      return "Hello, "+name;
  }

};
module.exports = sayHello;
