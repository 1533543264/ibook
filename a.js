var $bans=(function(){
  var $cn = $(''
    + '<div class="slider" id="slider">'
      + '<div >'
      + '<div   class="slide">'
        +'<img  src="img/b5.png"  alt="第五张">'
      +'</div>'
      + '<div   class="slide">'
        +'<img  src="img/b1.png"  alt="第一张">'
      +'</div>'
      + '<div   class="slide">'
        +'<img  src="img/b2.png"  alt="第二张">'
      +'</div>'
      + '<div   class="slide">'
        +'<img  src="img/b3.png"  alt="第三张">'
      +'</div>'
      + '<div   class="slide">'
        +'<img  src="img/b4.png"  alt="第四张">'
      +'</div>'
      + '<div   class="slide">'
        +'<img  src="img/b5.png"  alt="第五张">'
      +'</div>'
      + '<div   class="slide">'
        +'<img  src="img/b1.png"  alt="第一张">'
      +'</div>'
      + '</div>'
      + '</div>'
      + '<span id="left">'
      +'<'
      +'</span>'
       + '<span id="right">'
       +'>'
       +'</span>'
      +'<div>'
      + '<ul class="nav" id="navs">'
      +   '<li class="active"> '
      +' 1'
      +'</li>'
      +   '<li>'
      + '2'
      +'</li>'
      +   '<li> '
      + '3'
      +'</li>'
      +   '<li> '
      + '4'
      +'</li>'
      +   '<li> '
      + '5'
      +'</li>'
       +   '</ul>'
      + '</div>');

  function po(){
    var zero =0;
 var hu =2500;
    var i=0;
    var t = setInterval(v, hu);
  var onehand =1200;
    $('#box').append($cn);
  
    var $d = $('#left');
    
    var $g = $('#right');
    var $slider = $('#slider');
    var   l = false;
    var number = 1;
    var vv='#navs'
var sixthouasnd=6000;

    $('#left').click( 
     /* i--;
      if (i==-1) {
      i=$('.img li').length-2;
      $('.img').css({left:-($('.img li').length-1)*1920});
      }
      $('.img').stop().animate({left:-i*1920},300);
      $('.nav li').eq(i).addClass('active').siblings().removeClass('active');     
      */ 
      function()
      {
       x();
    })
    function x()
    {
      if(l)
      {
         console.log('您点击过快')
      }
      else{
           number -- ;l = true;
      
      for(var i  =  zero; i  <  $(vv).children().length ; i++)
      /**if (i==$('.img li').length-1) 
       * { //设置小圆点指示
$('.nav li').eq(0).addClass('active').siblings().removeClass('active');
}
else
{
$('.nav li').eq(i).addClass('active').siblings().removeClass('active');
} */
      {
            $(vv).children()[i].className = "";
      }
      if(number >= 6)
      {
          $(vv).children()[zero].className = "active";
      }
      else if(number <= zero)
      {
          $(vv).children()[4].className = "active";
      }
      else 
      {
          $(vv).children()[number-1].className = "active";
      }
      fl(slider, {left: -onehand*number}, function()
      {
          if(number == zero)
          {
            var five = 5;
            slider.style.left = '-6000px';
            number =  five;
          }
          l = false;
      });
    }
  }

  $('#right').click(
    /*i++;
if (i==$('.img li').length) {
i=1; //这里不是i=0
$('.img').css({left:0}); //保证无缝轮播，设置left值 */
    function()
  {
    var i =zero;
    if(i==zero)
      v();
  })
      function v()
      {
        if(l)
        {
         console.log('您点击过快')
       }
       else
        {
          var six =6;
          number++;l = true;
          var i =  zero;
          var mm= "active";
          for( i =  zero; i < $(vv).children().length ; i++)
          {
            $(vv).children()[i].className = "";
          }
        //console.log( $(vv).children()[i])
        if( number <= zero)
        {
          
          var vc = 4;
          $(vv).children()[vc].className = mm;
        }
        else if( number >= six)
        {
          var oi = zero;
          $(vv).children()[oi].className = mm;
        } 
        else 
        {
          $(vv).children()[number-1].className = mm;
        }
        fl(
          slider, 
          {
            left: -onehand * number
          }, 
          function()
        {
          if( number  == six)
          {
            number  =  1;
            slider.style.left = '-onehandpx';
            //consle.log(number)
          }
          else{

          }
          l = false;
        });
      }
      

    }

    $('#box').mouseout(
      function( )
    {
      
      var ff= zero;
      left.style.opacity  =  ff;
      
       t  =  setInterval( v, hu);

      right.style.opacity = ff;
    })

    function  pp( f, o)
    {
      if(f.currentStyle)
      {
        //console.log(f.currentStyle)
          return   f.currentStyle[o];
      } 
      else 
      {
        //console.log(f.currentStyle)
          return   getComputedStyle(f)[o];
      }
    }

    function  fl(f, oo, callback)
    {
      clearInterval(f.t);
      
      f.t = setInterval(function()
      
      {var op ='opacity';
        var q = true;
        for(var  o  in  oo)
        {
          var thirtenn=16;
          var  e  =  0;
          var hund =100;
          if(o  ==  op)
          {
            e  =  parseInt(pp( f , o) * hund);
            /*
            var m = (oo[o] - e) / 16;
            m = m>0 ? Math.ceil(m) : Math.floor(m);
            var ui= e + m;
            */
          }
          else
          {
            e = parseInt(pp(f, o));

            var m = (oo[o] - e) / thirtenn;

            m = m > 0 ?  Math.ceil( m ) : Math.floor( m ) ;

            var ui = e + m;
          }
          var m = (oo[o] - e) / thirtenn;

             m = m > 0 ?  Math.ceil( m ) : Math.floor( m ) ;
          //console.log(m)
          var ui = e + m;
          //console.log(ui)
          if(o != op)
          {
              f.style[o] = ui +  'px';
          }
          else
          {
             f.style[o] = ui / hund;
          }
          if( oo[o]  !==  ui)
          {
             q =  false;
          }
          else
          {

          }
        }
        if( q)
        {
           clearInterval( f.t );
            //console.log(clearInterval( f.t ))
              callback&&callback( );
        }
      }, 50)
    }
    $('#box').mouseover(function(){

      left.style.opacity = 0.8;
     //console.log($('#box'))
      clearInterval(t)

      right.style.opacity = 0.8;
    })

  }
  return {po: po}
})()
