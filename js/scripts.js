$(function(){
	// $(".owl-carousel.desktop").owlCarousel({
	// 	center: true,
	// 	items:2,
	// 	loop:true,
	// 	margin:10
	// });
	// $(".owl-carousel.mobile").owlCarousel({
	// 	center: true,
	// 	items:1,
	// 	loop:true
	// });

    $(".project-thumb-container li").on("mouseover",function(){
        $(".project-thumb-container").addClass($(this).data('ul-class')); 
        $(".transition").addClass('transition-white'); 
    });
    $(".project-thumb-container li").on("mouseout",function(){
        $(".project-thumb-container").removeClass($(this).data('ul-class'));  
        $(".transition").removeClass('transition-white'); 
    });
	//Animsition
	$(".animsition").animsition({
		inClass: 'fade-in-left-sm',
		outClass: 'fade-out-down-sm',
		inDuration: 500,
		outDuration: 500,
		linkElement: '.animsition-link',
		// e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
		loading: true,
		loadingParentElement: 'body', //animsition wrapper element
		loadingClass: 'animsition-loading',
		unSupportCss: [
		  'animation-duration',
		  '-webkit-animation-duration',
		  '-o-animation-duration'
		]
	});
});