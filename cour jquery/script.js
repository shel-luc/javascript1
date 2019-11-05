$(function(){
  var $mainmenuitems= $("#main-menu ul").children("li"),
   totalmainmenuitems= $mainmenuitems.length,
   openedIndex = -1,
   init = (function(){
     $mainmenuitems.children(".images").click(function(){
       var newIndex = $(this).parent().index(),
       $items= $mainmenuitems.eq(newIndex);
       animateitem($items,true,250);
       openedIndex = newIndex;
     });
   },
   animateitem= function($items, toOpen, speed){
      var $colorImages = $items.find(".color"),
      itemParam= toOpen ? {width:"420px"}: {width:"140px"},
      colorimagesPram = toOpen ? {left:"0px"}:{left:"140px"};
      $colorImages.animate(colorimagesPram,speed);
      $items.animate(itemParam,speed);
      };

      init();
});
