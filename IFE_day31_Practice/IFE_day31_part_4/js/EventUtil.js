
// 跨浏览器的事件方案
var EventUtil = {
    addHandler: function(element, type, handler){
        if (element.addEventListener){
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent){
            element.attachEvent('on' + type, handler);
        } else {
            element['on' + type] = handler;
        }
    },
    getEvent: function(event){
        return event ? event : window.event;
    },
    getTarget: function(evnet){
        return event.target ? event.target : event.srcElement;
    },
    removeHandler: function(element, type, handler){
        if (element.removeEventListener){
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent){
            element.detachEvent('on' + type, handler);
        } else {
            element['on' + type] = null;
        }
    }
}