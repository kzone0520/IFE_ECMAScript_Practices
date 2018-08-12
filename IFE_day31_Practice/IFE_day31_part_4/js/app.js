
// 通过浏览器history.pushState方式记录操作 的加载事件
EventUtil.addHandler(window, 'load', function(){
    if (window.history.state){
        var selectValue = window.history.state;
        makeSelect(selectValue);
    }
    if (selectOne(productCbox) == 0 || selectOne(regionCbox) == 0){
        console.log(666);
        productCbox[0].checked = "checked";
        productCbox[0].disabled = true;
        regionCbox[0].checked = "checked";
        regionCbox[0].disabled= true;

        // 首次载入时替换当前的历史记录
        window.history.replaceState({
            product: productValueList,
            region: regionValueList
        }, null, "#step"+step);
    }
    inp_change_handler();
    makeBar(getData(['华东'], ['手机'])[0]);
})

EventUtil.addHandler(selectDiv, "click", select_click_handler);
// 选择框变动触发 “图表及表格更改” 函数
EventUtil.addHandler(selectDiv, "change", inp_change_handler);
// 选择框变动触发 “浏览器的历史记录中插入记录” 函数
EventUtil.addHandler(selectDiv, "change", stateMark);
// 浏览器或者点击浏览器前进、后退时触发事件
EventUtil.addHandler(window, 'popstate', stateHandler);

EventUtil.addHandler(table, 'click', table_click_handler);
EventUtil.addHandler(table, 'keydown', keydown_handler);
// 表格变动（当有行插入时）触发事件
EventUtil.addHandler(table, 'DOMNodeInserted', table_change_handler);
EventUtil.addHandler(table, 'mouseover', table_mouseover_handler);

/* 通过hash方式记录操作 的加载事件
EventUtil.addHandler(window, 'load', function(){
    wrapHandler();
    if (selectOne(productCbox) == 0 || selectOne(regionCbox) == 0){
        console.log(666);
        productCbox[0].checked = "checked";
        productCbox[0].disabled = true;
        regionCbox[0].checked = "checked";
        regionCbox[0].disabled= true;
    }
    inp_change_handler();
    makeBar(getData(['华东'], ['手机'])[0]);
})
*/