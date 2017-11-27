function navigation(sSelector){
    var m = this;
    
    m.menu = $(sSelector);
    
    // 2. Logic ===================
    
    m.showMenu = function() {
        var jqMenu = m.menu.find('.navigation');
        var jqIconBar = $(this);
        
        if(jqMenu.hasClass('.active')){
            jqMenu.stop().toggleClass('.active');
            jqMenu.animate({'right' : '-1500px'}, 1000);
            jqIconBar.find('.fa-times').removeClass('fa-times').addClass('fa-bars');
            jqIconBar.css({'position' : 'absolute'});
            jqIconBar.closest('body').removeClass('lock');
            m.menu.find('.shadow').hide();
        }
        else{
            jqMenu.stop().toggleClass('.active');
            jqMenu.animate({'right' : '0px'}, 1000);
            jqIconBar.closest('body').addClass('lock');
            jqIconBar.find('.fa-bars').removeClass('fa-bars').addClass('fa-times');
            jqIconBar.css({'position' : 'fixed'});
            m.menu.find('.shadow').show();
        }
    }
    
    m.openSearch = function() {
        $(this).css(
            {'width' : '10em'}
            ,{'cursor' : 'auto'}
            ,{'border-color' : '#777777'}
            ,{'font-size' : '14px'}
        );
    }
    
    m.closeSearch = function() {
        
        if(!$(this).val()){
            $(this).css(
            {'width' : '2em'}
            ,{'cursor' : 'pointer'}
            ,{'border-color' : '#ffffff'}
            ,{'font-size' : '1.6em'}
            );
        }
    }
    
    // 3. Events ==================
 
    m.menu.find('.menu-link').click(m.showMenu);
    m.menu.find('.search-field').focusin(m.openSearch);
    m.menu.find('.search-field').focusout(m.closeSearch);
}
