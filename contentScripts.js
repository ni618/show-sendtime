(function ($) {
    $().ready(function () {
        $('head').append('<style>.seen {color: #CD3333;} </style>');
        
        setInterval(function () {
            if( $('.messages').length == 0 ) return;
            
            $('.messages').after(function (index, elem) {
                var $this = $(this);
                var css = {
                    color:      '#AAAAAA',
                    padding:    '6px 0 0',
                    margin:     '5px 0 0' };
                
                if( $this.parent().hasClass('_50kd') ) { // 對方留言
                    if( $this.hasClass('hasTime') ) return;
                    $this.addClass('hasTime');
                    
                    $this.children().css('max-width', '145px');
                    
                    var $span = $('<span>');
                    var text = $this.prev().children('a').attr('aria-label').match(/\d+:\d+/);
                    
                    css.float = 'right';
                    $span.css(css).text(text);
                    return $span;
                }
                else { // 自己的留言，會疊在同一個裡面
                    $this.css('margin-left', '0px');
                    $this.children('._55r0').after(function (i, e) {
                        var $this2 = $(this);
                        
                        if( $this2.hasClass('hasTime') ) return;
                        $this2.addClass('hasTime');
                        
                        if( $this2.next().get(0) && $this2.next().get(0).tagName.toLowerCase() == 'span' )
                        { console.log('twice'); return; }
                        
                        var $span = $('<span>');
                        var title = $this2.attr('title');
                        
                        css.float = 'left';
                        $span.css(css).text(title);
                        return $span;
                    });
                }
                
            });
            
        }, 3000);
    });
})(jQuery);