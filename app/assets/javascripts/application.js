// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

//navigation animation
$(function() {
    $('#navigation_menu > li').bind('mouseenter',function(){
        var $elem = $(this);
        $elem.find('img')
             .stop(true)
             .animate({
                'width':'170px',
                'height':'170px',
                'left':'0px'
             },400,'easeOutBack')
             .andSelf()
             .find('.navigation_wrap')
             .stop(true)
             .animate({'top':'140px'},500,'easeOutBack')
             .andSelf()
             .find('.navigation_active')
             .stop(true)
             .animate({'height':'170px'},300,function(){
            var $sub_menu = $elem.find('.navigation_box');
            if($sub_menu.length){
                var left = '170px';
                if($elem.parent().children().length == $elem.index()+1)
                    left = '-170px';
                $sub_menu.show().animate({'left':left},200);
            }   
        });
    }).bind('mouseleave',function(){
        var $elem = $(this);
        var $sub_menu = $elem.find('.navigation_box');
        if($sub_menu.length)
            $sub_menu.hide().css('left','0px');
         
        $elem.find('.navigation_active')
             .stop(true)
             .animate({'height':'0px'},300)
             .andSelf().find('img')
             .stop(true)
             .animate({
                'width':'0px',
                'height':'0px',
                'left':'85px'},400)
             .andSelf()
             .find('.navigation_wrap')
             .stop(true)
             .animate({'top':'25px'},500);
    });
});