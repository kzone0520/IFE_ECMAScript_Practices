
EventUtil.addHandler(selectDiv, "click", select_click_handler);
EventUtil.addHandler(selectDiv, "change", inp_change_handler);
EventUtil.addHandler(table, 'click', table_click_handler);
EventUtil.addHandler(table, 'keydown', keydown_handler);
// 表格变动（当有行插入时）触发事件
EventUtil.addHandler(table, 'DOMNodeInserted', table_change_handler);
EventUtil.addHandler(table, 'mouseover', table_mouseover_handler);

// 初始显示表格,初始状态一行只有一个勾选，所以不可取消
regionCbox[0].checked = "checked";
regionCbox[0].disabled= true;
productCbox[0].checked = "checked";
productCbox[0].disabled = true;

//table.innerHTML = tbodyHTML([sourceData[0].product], [sourceData[0].region]);
tbodyHTML([sourceData[0].product], [sourceData[0].region]);
// 默认折线图、柱状图
makeMoreLine(getData(['华东'], ['手机']), myDraw);
makeBar(getData(['华东'], ['手机'])[0]);
