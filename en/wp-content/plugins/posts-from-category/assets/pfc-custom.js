( function( $ ) {

    $( document ).ready(function( $ ) {

        $(".pfc-posts-main .pfc-post.layout-one").each(function(){

        	var thumbHeight = $(this).find('.news-thumb img').height();

        	var infoHeight = $(this).find('.news-text-wrap').height();

        	if( thumbHeight != null &&  infoHeight != null && thumbHeight > infoHeight ){

        		$(this).find('.news-text-wrap').css( 'min-height', thumbHeight+'px');

        	}
        	
        });

    });

} )( jQuery );