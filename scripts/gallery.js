function gallery(sSelector){
    var g = this;
    
    g.gallery = $(sSelector);
    
    // 1. Data ===================
    
    g.pictures       = g.gallery.find('.portfolio-image');
    g.preview        = g.gallery.find('.preview');
    g.arrowPrev      = g.gallery.find('.arrow-prev');
    g.arrowNext      = g.gallery.find('.arrow-next');
    g.previewImage   = g.gallery.find('.preview-image');
    g.previewContent = g.gallery.find('.preview-content');
    
    g.current = 0;
    g.qty     = 10;
    
    // 2. Logic ===================
        
    g.showPreview = function() {
        var jqPicture = $(this);
        g.current = g.pictures.index(jqPicture);
    
        g.showImage(0);
    
        g.preview.addClass('preview-shown');  
    } 
    
    g.showPrevious = function() { 
        g.showImage(gallery.SHIFT_PREVIOUS);
    }

    g.showNext = function() {
        g.showImage(gallery.SHIFT_NEXT);  
    }
    
    g.showImage = function(iShift) {
        g.current += iShift; 
        
        var jqPicture         = g.pictures.eq(g.current)
            ,jqSmallPicture   = jqPicture.find('.image')
            ,sSmallPictureSrc = jqSmallPicture.attr('src')
            ,sBigPictureSrc   = sSmallPictureSrc.replace('portfolio_', '');
        
        g.previewContent.animate(
            {})
        g.previewImage.attr('src', sBigPictureSrc);
        
        g.arrowPrev
                .css({'opacity' : 1})
                .css({'pointer-events' : 'auto'});
        
        g.arrowNext
                .css({'opacity' : 1})
                .css({'pointer-events' : 'auto'});
        
        g.inspectPictureRange(g.current);
  }
    
    g.inspectPictureRange = function(iCurrent) {
        if(iCurrent == 0) {
            g.arrowPrev
                .css({'opacity' : 0.3})
                .css({'pointer-events' : 'none'});
        } 
        else if(iCurrent == g.qty - 1) {
            g.arrowNext
                .css({'opacity' : 0.3})
                .css({'pointer-events' : 'none'});
        }
    }
    
    g.closePreview = function(event) {
        if($(event.target).hasClass('preview')){
            g.preview.removeClass('preview-shown');
        }
    }
    
    // 3. Events ==================
 
    g.pictures   .click(g.showPreview);
    g.preview    .click(g.closePreview);
    g.arrowPrev  .click(g.showPrevious);
    g.arrowNext  .click(g.showNext);

}

gallery.SHIFT_PREVIOUS   = -1;
gallery.SHIFT_NEXT       = +1;
