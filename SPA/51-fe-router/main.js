$(function(){
  window.onhashchange=function(){
    /*var n=$(".main"),
    o=window.location.hash,
    a=o.substring(2,o.length);
    n.css({"background-color":a});*/

    
    var $block = $('.main'),
    strHash = widdow.location.hash,
    color = strHash.substring(3,strHash.length);
    $block.css({
      "background-color":color
    })  
     
  }
});
