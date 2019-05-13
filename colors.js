var Links ={
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i<alist.length){
    // console.log(alist[i]);
    // alist[i].style.color = color;
    // i = i+1;
    // }
    $('a').css('color', color);
  }
}
var Body ={
  setColor:function(color){
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor:function(color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}
function nightDayHandler(my){
  var target=document.querySelector('body');
  if(my.value === 'Night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    my.value = 'Day';

    Links.setColor('powderblue');
  } else {
    Body.setBackgroundColor('#FFF9E1');
    Body.setColor('black');
    my.value = 'Night';

    Links.setColor('blue');
  }
}
