(function($) {
    $.showTip = function(trigger, message, options) {

        var _TIP_WRAPPER_TEMPLATE = '<div class="neat-tip" style="position: absolute; top: 0; left: 0; opacity: 1; z-index: 99999; display: none;">'+
            '<div class="neat-tip-content">'+message+'</div>'+
                '<span class="neat-tip-arrow-shadow"></span>' +
                '<span class="neat-tip-arrow"></span>'+
            '</div>';
        var settings = {
            position:'right',
            color: 'red',
            offset:10,
            closeAfter:-1
        };

        if (options) {
            $.extend(settings, options);
        }

        var $tip=$(_TIP_WRAPPER_TEMPLATE);
        trigger.after($tip);
        $tip.addClass(settings.color);
        setTipPosition($tip, settings.position, settings.offset);
        processArrowStyle($tip, trigger);
        $tip.fadeIn(500);
        if(settings.closeAfter!=-1){
            $tip.delay(settings.closeAfter*1000).fadeOut(500);
        }

        function setTipPosition($tip, position, offset){
            var top,left;
            switch (settings.position) {
                case "left":
                    top = trigger.position().top + Math.max(trigger.outerHeight(), $tip.outerHeight())/2;
                    left= trigger.position().left - $tip.outerWidth(true)-offset;
                    break;
                case "right":
                    top = trigger.position().top + Math.abs(trigger.outerHeight()-$tip.outerHeight())/2;
                    left= trigger.position().left + trigger.outerWidth(true) + offset;
                    break;
                case "top":
                    top = trigger.position().top - $tip.outerHeight(true) - offset;
                    left= trigger.position().left+trigger.outerWidth(true)/2 - $tip.outerWidth()/2;
                    break;
                case "bottom":
                    top = trigger.position().top + trigger.outerHeight(true)+offset;
                    left= trigger.position().left+trigger.outerWidth(true)/2 - $tip.outerWidth()/2;
                    break;
                default:
                    break;
            }
            $tip.css('top',top);
            $tip.css('left',left);

        }
        function processArrowStyle($tip, trigger){
            var arrowCss=getArrowCss($tip, trigger);
            $tip.find('.neat-tip-arrow').css(arrowCss['arrow']);
            $tip.find('.neat-tip-arrow-shadow').css(arrowCss['shadow']);
        }

        function getArrowCss($tip, trigger){
            var arrowCss, position, _arrowCss, _borderColor, _left, _shadowBorderColor, _shadowCss;
            arrowCss = {};
            arrowCss['arrow'] = {
                position: 'absolute',
                height: 0,
                width: 0,
                border: '6px solid transparent'
            };
            _arrowCss = _shadowCss = {};
            _shadowBorderColor = $tip.find('.neat-tip-content').css('border-color');
            _borderColor = $tip.find('.neat-tip-content').css('background-color');
            switch (settings.position) {
                case "top":
                    _left = Math.floor(Math.max(trigger.outerWidth(), $tip.outerWidth())/2);
                    _arrowCss = {
                        'bottom': '-11px',
                        'left': _left + 'px',
                        'border-top-color': _borderColor
                    };
                    _shadowCss = {
                        'bottom': '-14px',
                        'border-top-color': _shadowBorderColor,
                        'left': (_left - 1) + 'px'
                    };
                    break;
                case "bottom":
                    _left = Math.floor(Math.max(trigger.outerWidth(), $tip.outerWidth())/2);
                    _arrowCss = {
                        'top': '-11px',
                        'left': _left + 'px',
                        'border-bottom-color': _borderColor
                    };
                    _shadowCss = {
                        'top': '-14px',
                        'border-bottom-color': _shadowBorderColor,
                        'left': (_left - 1) + 'px'
                    };
                    break;
                case "left":
                    _arrowCss = {
                        'right': '-11px',
                        'top': '7px',
                        'border-left-color': _borderColor
                    };
                    _shadowCss = {
                        'right': '-14px',
                        'border-left-color': _shadowBorderColor,
                        'top': '6px'
                    };
                    break;
                case "right":
                default:
                    _arrowCss = {
                        'left': '-11px',
                        'top': '7px',
                        'border-right-color': _borderColor
                    };
                    _shadowCss = {
                        'left': '-14px',
                        'border-right-color': _shadowBorderColor,
                        'top': '6px'
                    };
                    break;
            }
            arrowCss['arrow'] = $.extend({}, arrowCss['arrow'], _arrowCss);
            arrowCss['shadow'] = $.extend({}, arrowCss['arrow'], {
                'border-width': '7px',
                'opacity': '0.20'
            }, _shadowCss);
            return arrowCss;

        }
        return $tip;
    };
})(jQuery);
