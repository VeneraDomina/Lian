function Gallery(sSelector){
    const g = this;

    g.gallery = $(sSelector);
    
    // 1. Data ===================
    
    g.pictures       = g.gallery.find('.gallery-image');
    g.preview        = g.gallery.find('.preview');
    g.arrowPrev      = g.gallery.find('.arrow-prev');
    g.arrowNext      = g.gallery.find('.arrow-next');
    g.previewImage   = g.gallery.find('.preview-image');
    g.previewContent = g.gallery.find('.preview-content');
    
    g.current = 0;
    g.qty     = 10;
    
   g.previewImage.width(g.previewContent.width() * 0.98);
    
    // 2. Logic ===================
        
    g.showPreview          = function() {
        let jqPicture = $(this);
        g.current = g.pictures.index(jqPicture);
    
        g.showImage(0);
    
        g.preview.addClass('preview-shown');  
    } 
    
    g.showPrevious         = function() { 
        g.showImage(Gallery.SHIFT_PREVIOUS);
    }

    g.showNext             = function() {
        g.showImage(Gallery.SHIFT_NEXT);  
    }
    
    g.showImage            = function(iShift) {
        g.current += iShift; 
        
        g.setImagePreviewWidth;
        
        let jqPicture         = g.pictures.eq(g.current)
            ,jqSmallPicture   = jqPicture.find('.image')
            ,sSmallPictureSrc = jqSmallPicture.attr('src')
            ,sBigPictureSrc   = sSmallPictureSrc.replace('portfolio_', '');
        
        if(g.preview.hasClass('preview-shown')){
            g.previewImage.fadeOut(500, function() {
                g.previewImage.attr('src', sBigPictureSrc);
                g.previewImage.fadeIn(500);
            });
            
            
        }
        else {
            g.previewImage.attr('src', sBigPictureSrc);
        }
        
        
        g.arrowPrev
                .css({'opacity' : 1})
                .css({'pointer-events' : 'auto'});
        
        g.arrowNext
                .css({'opacity' : 1})
                .css({'pointer-events' : 'auto'});
        
        g.inspectPictureRange(g.current);
  }
    
    g.inspectPictureRange  = function(iCurrent) {
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
    
    g.closePreview         = (event) => {
        if($(event.target).hasClass('preview')){
            g.preview.removeClass('preview-shown');
        }
    }
    
    g.setImagePreviewWidth = function() {
        g.previewImage.width(g.previewContent.width() * 0.98);
    }
    
    $(window).resize(g.setImagePreviewWidth);
    
    // 3. Events ==================
 
    g.pictures   .click(g.showPreview);
    g.preview    .click(g.closePreview);
    g.arrowPrev  .click(g.showPrevious);
    g.arrowNext  .click(g.showNext);

}

Gallery.SHIFT_PREVIOUS   = -1;
Gallery.SHIFT_NEXT       = +1;

