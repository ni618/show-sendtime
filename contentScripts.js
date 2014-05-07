document.addEventListener('DOMContentLoaded', function() {
    
    /* highlight the seen word */
    var style = document.createElement('style');
    style.textContent = '.seen{color:#CD3333;}'
                        + '.time-me{color:#AAA;padding:5px;}'
                        + '.time-you{color:#AAA;padding:5px;float:right;}';
    document.head.appendChild(style);
    
    console.log( $('#pagelet_dock').get(0) );
    
    
    var target = $('#pagelet_dock').get(0);
    var config = { childList: true, subtree: true };
    
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            [].slice.call(mutation.addedNodes).forEach(function (target) {
                if( target.tagName && 'span' === target.tagName.toLowerCase()
                    && target.classList.contains('label') ) return;
                
                if( target.tagName )
                    console.log(target);
                else
                    ;//console.log(mutation.addedNodes[0], mutation.addedNodes);
                
                if( target.tagName && 'div' === target.tagName.toLowerCase()
                    && target.classList.contains('fbNub')
                    && !target.classList.contains('uiToggle') ) {
                    console.log( target.classList );
                }
                 
                if( target.tagName && 'div' === target.tagName.toLowerCase()
                    && target.classList.contains('_5yt9') ) {
                    var sendtime, span;
                    var height = target.firstChild.offsetHeight;
                    
                    
                    if( target.getAttribute('title') ) {
                        // me
                    span = document.createElement('span');
                    span.classList.add('time-me');
                    span.textContent = target.getAttribute('title');
                    span.setAttribute('style', 'line-height: ' + height + 'px;');
                    
                    
                    target.appendChild(span);
                    }
                    else if( target.firstChild.getAttribute('aria-label') ) {
                        // you
                        
                        target.firstChild.nextSibling.setAttribute('style', 'max-width: 155px;');
                        
                    height = target.firstChild.nextSibling.firstChild.firstChild.offsetHeight;
                        
                    span = document.createElement('span');
                    span.classList.add('time-you');
                    sendtime = target.firstChild.getAttribute('aria-label');
                    span.textContent = sendtime.match(/\d+:\d+/);
                    span.setAttribute('style', 'line-height: ' + height + 'px;');
                    
                    
                    target.insertBefore(span, target.firstChild);
                        
                    }
                }
            });
        });    
    });
    
    
    observer.observe(target, config);
    
    /*
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
    */
});