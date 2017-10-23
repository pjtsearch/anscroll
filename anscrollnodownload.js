$("body").prepend("<style> *{ margin:0; padding:0;}#topScroll{ transform: rotate(180deg); position:absolute; top:0; left:0; width:100%; height:20px;}#bottomScroll{ position:fixed; bottom:0; left:0; width:100%; height:20px;} </style><img style='opacity:0' src='androidscroll.png' id='topScroll'><img style='opacity:0' src='androidscroll.png' id='bottomScroll'>");
$(window).scroll(function(){
    if ($(window).scrollTop() == $(document).height()-$(window).height()){
        $('#bottomScroll').animate({height:'32px', opacity:'1'});
       $('#bottomScroll').animate({height:'20px', opacity:'0'});
    }else{
     $("#bottomScroll").css("opacity", "0");
   }
});
 $(window).scroll(function() {   
   if($(window).scrollTop() <= 0) {
   $('#topScroll').animate({height:'32px', opacity:'1'}, 500);
       $('#topScroll').animate({height:'20px', opacity:'0'}, 700);
   }
});
