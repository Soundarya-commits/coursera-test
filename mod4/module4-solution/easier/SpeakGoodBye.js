
var speakWord = "Good Bye";
(function(window){
 var byeSpeaker=function(name){
 console.log(speakWord + " " + name);
}
window.byeSpeaker=byeSpeaker;
})(window);
