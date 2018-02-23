function Navigation(sSelector) {
    // Data
    const m = this;
    m.menu = $(sSelector);
    const jqTouchMenu = m.menu.find('.touch-menu');
    const jqSearch = m.menu.find('.search');
    const jqMenu = m.menu.find('.menu-list');
    
    // Logic
    
    m.showMenu       = () => {
        if(jqMenu.hasClass('active')){
            jqMenu.stop().toggleClass('active');
            jqMenu.slideToggle();
        } else {
            jqMenu.toggleClass('active');
            jqMenu.slideToggle();
        }
    }
    
    m.openSearch     = () => {
        jqSearch.css(
            {'width' : '120px'}
        );
    }
    
    m.closeSearch    = () => {
        jqSearch.css(
            {'width' : '16px'}
        );
    }
    
    m.checkMenuStyle = () => {
        
        if($(window).outerWidth() > 768) {
            jqMenu.css({'display' : 'flex'});
            
            if(jqMenu.hasClass('active')) jqMenu.removeClass('active');
        } else if (jqMenu.hasClass('active')) {
            jqMenu.css({'display' : 'block'});
        } else {
           jqMenu.css({'display' : 'none'});
        }
    }
    
    $(window).resize(m.checkMenuStyle);

    //Events
    
    jqTouchMenu.click(m.showMenu);
    jqSearch.focusin(m.openSearch);
    jqSearch.focusout(m.closeSearch);
}    

    
