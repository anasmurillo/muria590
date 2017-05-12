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
  if(hours >= 0 && hours <= 1) {
myDiv.innerHTML += '<img src="../img/watermelon/w1.png" class="ajax-loader"/></div>'
} else if (hours >= 1 && hours <=2){
myDiv.innerHTML += '<img src="../img/watermelon/w2.png" class="ajax-loader"/></div>'
} else if (hours >= 2 && hours <=3){
myDiv.innerHTML += '<img src="../img/watermelon/w3.png" class="ajax-loader"/></div>'
} else if (hours >= 3 && hours <=4){
myDiv.innerHTML += '<img src="../img/watermelon/w4.png" class="ajax-loader"/></div>'
} else if (hours >= 4 && hours <=5){
myDiv.innerHTML += '<img src="../img/watermelon/w5.png" class="ajax-loader"/></div>'
} else if (hours >= 5 && hours <=6){
myDiv.innerHTML += '<img src="../img/watermelon/w6.png" class="ajax-loader"/></div>'
} else if (hours >= 6 && hours <=7){
myDiv.innerHTML += '<img src="../img/watermelon/w7.png" class="ajax-loader"/></div>'
} else if (hours >= 7 && hours <=8){
myDiv.innerHTML += '<img src="../img/watermelon/w8.png" class="ajax-loader"/></div>'
} else if (hours >= 8 && hours <=9){
myDiv.innerHTML += '<img src="../img/watermelon/w9.png" class="ajax-loader"/></div>'
} else if (hours >= 9 && hours <=10){
myDiv.innerHTML += '<img src="../img/watermelon/w10.png" class="ajax-loader"/></div>'
} else if (hours >= 10 && hours <=11){
myDiv.innerHTML += '<img src="../img/watermelon/w11.png" class="ajax-loader"/></div>'
} else if (hours >= 11 && hours <=12){
myDiv.innerHTML += '<img src="../img/watermelon/w12.png" class="ajax-loader"/></div>'
} else if (hours >= 12 && hours <=13){
myDiv.innerHTML += '<img src="../img/watermelon/w13.png" class="ajax-loader"/></div>'
} else if (hours >= 13 && hours <=14){
myDiv.innerHTML += '<img src="../img/watermelon/w14.png" class="ajax-loader"/></div>'
} else if (hours >= 14 && hours <=15){
myDiv.innerHTML += '<img src="../img/watermelon/w15.png" class="ajax-loader"/></div>'
} else if (hours >= 15 && hours <=16){
myDiv.innerHTML += '<img src="../img/watermelon/w16.png" class="ajax-loader"/></div>'
} else if (hours >= 16 && hours <=17){
myDiv.innerHTML += '<img src="../img/watermelon/w17.png" class="ajax-loader"/></div>'
} else if (hours >= 17 && hours <=18){
myDiv.innerHTML += '<img src="../img/watermelon/w18.png" class="ajax-loader"/></div>'
} else if (hours >= 18 && hours <=19){
myDiv.innerHTML += '<img src="../img/watermelon/w19.png" class="ajax-loader"/></div>'
} else if (hours >= 19 && hours <=20){
myDiv.innerHTML += '<img src="../img/watermelon/w20.png" class="ajax-loader"/></div>'
} else if (hours >= 20 && hours <=21){
myDiv.innerHTML += '<img src="../img/watermelon/w21.png" class="ajax-loader"/></div>'
} else if (hours >= 21 && hours <=22){
myDiv.innerHTML += '<img src="../img/watermelon/w22.png" class="ajax-loader"/></div>'
} else if (hours >= 22 && hours <=23){
myDiv.innerHTML += '<img src="../img/watermelon/w23.png" class="ajax-loader"/></div>'
} else if (hours >= 23 && hours <=0){
myDiv.innerHTML += '<img src="../img/watermelon/w24.png" class="ajax-loader"/></div>'



  } else {
  }
}


