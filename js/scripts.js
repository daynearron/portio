$(document).ready(function(){
    $(".project-thumb-container li").on("mouseover",function(){
        $(".project-thumb-container").addClass($(this).data('ul-class')); 
        $(".transition").addClass('transition-white'); 
    });
    $(".project-thumb-container li").on("mouseout",function(){
        $(".project-thumb-container").removeClass($(this).data('ul-class'));  
        $(".transition").removeClass('transition-white'); 
    });
});