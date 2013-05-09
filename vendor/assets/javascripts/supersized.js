jQuery(function($){
				$.supersized({
				
					//Functionality
					slideshow            :	1,		// Slideshow on/off
					autoplay				   :	1,		// Slideshow starts playing automatically
					start_slide          :  1,		// Start slide (0 is random)
					random					: 	0,		// Randomize slide order (Ignores start slide)
					slide_interval       :  7000,	// Length between transitions
					transition           :  1, 		// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
					transition_speed		:	700,	// Speed of transition
					new_window				:	1,		// Image links open in new window/tab
					pause_hover          :  0,		// Pause slideshow on hover
					keyboard_nav         :  1,		// Keyboard navigation on/off
					performance				:	1,		// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
					image_protect			:	1,		// Disables image dragging and right click with Javascript
					image_path				:	'img/', // Default image path
														   
					//Size & Position					   
					min_width		      :  0,		// Min width allowed (in pixels)
					min_height	       	:  0,		// Min height allowed (in pixels)
					vertical_center      :  1,		// Vertically center background
					horizontal_center    :  1,		// Horizontally center background
					fit_portrait         :  1,		// Portrait images will not exceed browser height
					fit_landscape			: 	1,		// Landscape images will not exceed browser width
														   
					//Components
					slide_links				:	0,		// Individual links for each slide
					thumb_links				:	0,		// Individual thumb links for each slide							   
					progress_bar			:	0,		// Timer for each slide
					navigation           :  1,		// Slideshow controls on/off
					thumbnail_navigation :  0,		// Thumbnail navigation
					slide_counter        :  0,		// Display slide numbers
					slide_captions       :  0,		// Slide caption (Pull from "title" in slides array)
					slides 					: 	[		// Slideshow Images
		
																	         {image : 'assets/26238211500px.jpg'} 
						
											
											         ,						{image : 'assets/abstract-background.jpg'} 
						
											
											         ,						{image : 'assets/Background_1500px.jpg'} 
						
											
											         ,						{image : 'assets/BergenComposite.jpg'} 
						
											
											         ,						{image : 'assets/cute-backgrounds.jpg'} 
						
											
											         ,						{image : 'assets/F90T6961_1500px1.jpg'} 
						
											
											         ,						{image : 'assets/pano_ballintoy_harbour_1500px.jpg'} 
						
											
											         ,						{image : 'assets/redbud1.jpg'} 
											
													]
												
				});
		    
 	$('#main-nav').hover(function(){
 		$('#main-nav li').stop().fadeTo('fast', 1);
 	}, function(){
 		$('#main-nav li').stop().fadeTo('fast', 0.7);
 	});
 	
 	$(document).ready(function(){
 		$('.content-box').stop().fadeOut(0);
 	});
 	
 	$('.close').click(function(){
 		$('.selected').removeClass('selected');
 		$('.content-box').stop().fadeOut(100);
 		return false;
 	});
 	
 	$('#main-nav li a').click(function(){
 	
    	if ($(this).attr('name')){
    		if ($(this).hasClass('selected')){
    			$('.selected').removeClass('selected');
    			$('.content-box').stop().fadeOut(100);
    			return false;
    		}else{
	    		$('.selected').removeClass('selected');
	    		$($(this)).addClass('selected');
	    		//$('#about').addClass('selected');
	    		$('.content-box').stop().fadeOut(100);
	    			$($(this).attr('name')).fadeIn(300);
	    		return false;
	    	}
	    }
    
 	});
 	
});
