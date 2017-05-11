$(document).mousemove(function(e) {
    $('.rat').offset({
        left: e.pageX,
        top: e.pageY - 100
    });
});

var date = new Date();


window.onload=function(){
  window.setInterval(CheckTime, 1000)
}

var CheckTime = function() {
  var date = new Date();

  var hours = date.getHours();
  var currentDate = new Date().getDay()
  var minutes = date.getMinutes()

  var myDiv = document.getElementById("myDiv");

  console.log(hours)
  if(hours >= 8 && hours <= 23) {
    myDiv.innerHTML += '<img src="../img/rat1.gif" class="ajax-loader"/></div>'
  } else if (hours >= 0 && hours <=7){
    myDiv.innerHTML += '<img src="../img/rat2.gif" class="ajax-loader"/></div>'
  } else {
  }
}


