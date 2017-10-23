$("body").prepend("<style> *{ margin:0; padding:0;}#topScroll{ transform: rotate(180deg); position:absolute; top:0; left:0; width:100%; height:20px;}#bottomScroll{ position:fixed; bottom:0; left:0; width:100%; height:20px;} </style><img style='display:none' src='androidscroll.png' id='topScroll'><img style='display:none' src='androidscroll.png' id='bottomScroll'>");
$(window).load(function(){
 $(window).scroll(function() {   
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       //alert("bottom!");
       //alert("top!");
       //$("#img").fadeIn();
       $('#bottomScroll').animate({height:'32px', opacity:'1'}, 500);
       $('#bottomScroll').animate({height:'20px', opacity:'0'}, 700);

   // Fade Out
   //$("#img").fadeOut();
   }else{
     $("#img").hide();
   }
});
 $(window).scroll(function() {   
   if($(window).scrollTop() <= 0) {
       //alert("top!");
   $('#topScroll').animate({height:'32px', opacity:'1'}, 500);
       $('#topScroll').animate({height:'20px', opacity:'0'}, 700);
       //$("#myImage").fadeOut();
   }
});

});
