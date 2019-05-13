var Link = {
  setColor:function(c){
    //var alist = document.querySelectorAll('a');
    //var i = 0;
    //while(i < alist.length){
    //  alist[i].style.color = c;
    //  i = i + 1;
    //}
    $('a').css('color', c);
  }
}
var Body = {
  setColor:function(a){
    $('body').css('color', a);
  },
  setBackgroundColor:function(b){
    $('body').css('backgroundColor', b);
  }
}
function nightDayHandler(self){
  var target = document.querySelector('body');
  if (self.value === 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value='day';
    Link.setColor('powderblue');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value='night';

    Link.setColor('blue');

  }
}
