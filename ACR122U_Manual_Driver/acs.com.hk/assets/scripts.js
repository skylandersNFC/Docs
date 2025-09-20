var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(document).ready(function() {
	
    $('a[href="#"]').click(function(e){
		e.preventDefault();
	});

	// Sticky Header
	var doc = document.documentElement;
	var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

	$(window).scroll(function () {
		if( $(window).scrollTop() > $('.head').offset().top + 108 && !($('.head').hasClass('fixed'))){
			$('.head').addClass('fixed').animate({"top":"0%"}, 1000);
			$('#btn-top').fadeIn();
		} else if ($(window).scrollTop() == 0){
			$('.head').removeClass('fixed').css({"top":"-100%"});
			$('#btn-top').fadeOut();
		}
	});

	$('#btn-top').click(function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
	})

	// Mobile menu
	var search = $('.desktop-search')[0].outerHTML;
	$('nav#menu').mmenu({
		"extensions": [
			"pagedim-black",
			"fullscreen"
		],
		"offCanvas": {
		   position  : "right",
		},
		"setSelected": {
			"hover": true
		},
		"classNames": {
			selected: "active"
		 },
		"navbars": [
			{
				"position": "top",
				 "content": [
					'<div class="mobile-search">'+search+'</div>'
				 ]
			},
			{
				"position": "bottom",
				"content": [
					"<a class='fa fa-envelope' href='#/'></a>",
					"<a class='fa fa-twitter' href='#/'></a>",
					"<a class='fa fa-facebook' href='#/'></a>"
				]											
			}
		]
	});

	$('.select-product-driver, .select-product-line').change(function(){
		var target = $(this).find(':selected').attr('data-link');
		if(target!==undefined)
			location.href= target+'/';
	});

	// Mobile Search toggle
	$('.btn-mobile-search-toggle').click(function(){
		$('body').toggleClass('mobile-search-active');
	})

	// $('.menu1>li, .menu2>li, .menu3> li').on('mouseenter', function() {
		// if($(this).is('.menu3> li'))
		// {
			// var preview = $(this).parent('.menu3').parent('.caption').parent('.preview');
			// var img = preview.find('.thumbnail > img');
			// var title = preview.find('.thumbnail > h3');
			// img.attr('src','https://www.acs.com.hk/download/'+$(this).attr('data-img'));
			// title.html($(this).attr('data-title'));
		// }
		// else
		// {
			// if($(this).is('.menu1>li')) var li = $(this).find(".menu2>li:first-child");
			// else var li = $(this);
			
			// var img,img_src;
			// img = li.find(".menu3-wrapper .thumbnail > img");
			// img_src = img.attr("data-img-src");
			
			// if (img_src){
				// img.attr("src", 'https://www.acs.com.hk/download/'+img_src)
			// }
			// li.siblings().removeClass('active');
			// li.addClass('active');
		// }
		
	// });

	// $('.menu3').on('mouseleave', function() {
		// var preview = $(this).parent('.caption').parent('.preview');
		// var img = preview.find('.thumbnail > img');
		// var title = preview.find('.thumbnail > h3');
		// img.attr('src', 'https://www.acs.com.hk/download/'+img.attr('data-default-img'));
		// title.html('');
	// });


	$('.select-entry-year').change(function(){
		var target = $(this).attr('data-link');
		location.href= target+this.value+'/';
	});

	$(".search-form").on('submit', function(e) {
		var f = $(this);
		f.parsley().validate();
		if (!f.parsley().isValid()) {
			e.preventDefault();
			var errors = $(this).find('.parsley-errors-list').html();
			createModal({'id':'search-error','title':'Error','message':errors});
		}
	 });
	 
	 // $(".newsletter-subscription-form").on('submit', function(e) {
		// e.preventDefault();
		// var f = $(this);
		// f.parsley().validate();
		// if (f.parsley().isValid()) {
			// var form_data = $(this).serializeArray();
			// var post_action = '/action/forms/?page=newsletter-subscribe';

			// $.post( post_action, form_data, function( response ) {
				// if(response)
				// {
					// var response = jQuery.parseJSON(response);
					
					// if(response.success) var title = 'Success';
					// else var title = 'Error';
					
					// createModal({'title':title, 'message':response.message});
					// $('.form-apply').trigger('reset');
				// }
			// });
		// }
	 // });
});


$.fn.addPreloader = function() {
	this.append('<div id="preloader" class="text-center"><img src="https://library.acs.com.hk/images/preloader.gif" height="200" alt="Loading"/></div>');
	return this;
}; 

$.fn.removePreloader = function() {
	this.find('#preloader').remove();
	return this;
}; 

function createModal(options){
	
	// Create default modal values
	var defaults = {
		id:"site-message",
		title:"",
		message:"",
		size:"modal-sm",
		close:"Close",
	};
	
	// Add custom options to the default values
	var modal = $.extend(true, defaults, options);
	
	// if( $('#'+modal.id).length ) $('#'+modal.id).remove();
	
	// Create HTML Object
	modal["html"] = 
	'<div class="modal fade" id="'+modal.id+'" role="dialog">'+
		'<div class="modal-dialog '+modal.size+'">'+
			'<div class="modal-content">'+
				'<div class="modal-header">'+
					'<button type="button" class="close" data-dismiss="modal">&times;</button>'+
					'<h4 class="modal-title">'+modal.title+'</h4>'+
				'</div>'+
				'<div class="modal-body">'+modal.message+'</div>'+
				'<div class="modal-footer">'+
					'<button type="button" class="btn btn-default" data-dismiss="modal">'+modal.close+'</button>'+
				'</div>'+
			'</div>'+
		'</div>'+
	'</div>';
	
	// Add Modal to Body
	$('body').append(modal.html);
	$('#'+modal.id).modal();
	
	$('#'+modal.id).on('hidden.bs.modal', function () {
		$(this).remove();
	});
}

function objectifyForm(formArray) {//serialize data function
	var returnArray = {};
	for (var i = 0; i < formArray.length; i++){
		returnArray[formArray[i]['name']] = formArray[i]['value'];
	}
	return returnArray;
}

}
/*
     FILE ARCHIVED ON 05:32:08 Sep 20, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:30:41 Sep 20, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.728
  exclusion.robots: 0.031
  exclusion.robots.policy: 0.014
  esindex: 0.014
  cdx.remote: 23.901
  LoadShardBlock: 398.793 (3)
  PetaboxLoader3.datanode: 139.678 (4)
  PetaboxLoader3.resolve: 103.603 (2)
  load_resource: 96.963
*/