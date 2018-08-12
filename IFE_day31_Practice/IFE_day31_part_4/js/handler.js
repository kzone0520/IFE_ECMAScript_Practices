var regionSelect = document.getElementById('region-select');
var regionCbox = regionSelect.querySelectorAll('input');
var productSelect = document.getElementById('product-select');
var productCbox = productSelect.querySelectorAll('input');
var table = document.querySelector('table');
var selectDiv = document.getElementById('selectDiv');
var myDraw = document.getElementById('myDraw');
var trData = document.querySelectorAll('.trData');
var step = 0;

// 勾选的初始值
var productValueList = ['手机'];
var regionValueList = ['华东'];

// 选择框点击函数
var select_click_handler = function(event){
    var event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    if (target == regionCbox[3]){
        selectAll(regionCbox);
    }
    if (target == productCbox[3]){
        selectAll(productCbox);
    }
    for(let i = 0; i < regionCbox.length - 1; i++){
        if (target == regionCbox[i]){
            selectOne(regionCbox);
        }
    }
    for(let j = 0; j < productCbox.length - 1; j++){
        if (target == productCbox[j]){
            selectOne(productCbox);
        }
    }
};

// 选择框变化函数
var inp_change_handler = function(){
    // 获取勾选的值
    productValueList = [];
    regionValueList = [];
    for(let i = 0; i < productCbox.length - 1; i++){
        if(productCbox[i].checked){
            productValueList.push(productCbox[i].value);
        }
    }
    for(let i = 0; i < regionCbox.length - 1; i++){
        if(regionCbox[i].checked){
            regionValueList.push(regionCbox[i].value);
        }
    }
    /*
    // 将勾选值组装成JSON传入hash
    var selectValue = {
        product: productValueList,
        region: regionValueList
    };
    window.location.hash = JSON.stringify(selectValue);
    */
    // 显示表格
    tbodyHTML(productValueList, regionValueList);
    // 当地区选项只有一个，且商品选项大于一个，则地区列在前
    if(productValueList.length > 1 && regionValueList.length == 1){
        for(let i = 0; i< table.rows.length; i++){
            var x = table.rows[i].cells[0].innerText;
            table.rows[i].cells[0].innerText = table.rows[i].cells[1].innerText;
            table.rows[i].cells[1].innerText = x;
        }
    }
    // 合并第一列相同部分
    var k = 0;
    for(let i = 0; i< table.rows.length-1; i++){
        if( table.rows[i].cells[0].innerText == table.rows[i+1].cells[0].innerText){
            table.rows[i+1].cells[0].style.display = 'none';
            table.rows[k].cells[0].rowSpan += 1;
        }
        else{
            k = i+1;
        }
    }
    // 获取数据数组，显示多折线图
    var dataArr = getData(productValueList, regionValueList);
    makeMoreLine(dataArr, myDraw);
};

// 表格变动（当有行插入时）事件函数
var table_change_handler = function(){
    // 设置输入框失去焦点事件（此事件无法冒泡，我只能想到这种方法）
    var aInp = document.querySelectorAll('.dataInp');
    for (let item of aInp){
        item.onblur = function(){
            // 非只读情况下才允许以下操作，否则会有意料之外的bug
            if (item.readOnly == false){
                var t = setTimeout(function(){
                    item.parentNode.childNodes[1].style.display = 'none';
                    item.parentNode.childNodes[2].style.display = 'none';
                    // 判读是否点击的保存按钮使输入框失去焦点
                    if (saveBtnMark == 1){
                        saveBtnMark = null;
                    }
                    else {
                        item.value=old_inpValue;
                    }
                    item.readOnly = true;
                }, 200);
            }
        }
    }
    /*  以下片段是table的另一种做法的对应代码
    //  添加笔图标、保存和按钮键  
    for(let i = 1; i< table.rows.length;i++){
        for(let j = 2;j<table.rows[i].cells.length;j++){
            table.rows[i].cells[j].innerHTML += '<button class="save" style="float:left;" type="submit">保存</button>'
            table.rows[i].cells[j].innerHTML += '<button class="cancle"  style="float:right" type="submit">取消</button>';
            table.rows[i].cells[j].innerHTML += '<img class="img"  src="./pen.png" width="10px" height="10px" alt="pen" />';
        }
    }
    */   
};

// 选择框变手动变换时在浏览器的历史记录中插入记录
var stateMark = function(){
    var selectValue = {
        product: productValueList,
        region: regionValueList
    };
    step ++;
    window.history.pushState(selectValue, null, "#step"+step);
    console.log("input_State:");
    console.log(selectValue);
}

// 保存按钮的标志，当点击保存按钮后，此值改为1.
var saveBtnMark = null;
// 单元格修改前的数据
var old_inpValue=null;

// 表格点击函数
var table_click_handler = function(event){
    var event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    if (target.className == "img"){
        let inp = target.parentNode.firstElementChild;
        inp.readOnly = false;
        inp.focus();
        inp.select();
        target.parentNode.childNodes[1].style.display = 'block';
        target.parentNode.childNodes[2].style.display = 'block';
        // 当从其他单元格修改数字后未保存也未取消就点击此单元格时，延迟0.3秒保存这个数据，好让其他单元格数字恢复。
        setTimeout(function(){old_inpValue = target.parentNode.firstElementChild.value;}, 300);
        saveBtnMark = null;
    }
    if (target.className == "save"){
        let inp_value = target.parentNode.childNodes[0].value;
        if (isNaN(inp_value)){
            alert('请输入数字！');
        }
        else{
            // 保存数据到localStroage（函数在下面）
            saveData();
            target.style.display = 'none';
            target.parentNode.childNodes[2].style.display = 'none';
            saveBtnMark = 1;
        }
    }
    /*
    // 有了失去焦点的事件 就无需设置取消按钮的事件了
    if (target.className == "cancle"){
        let inp = target.parentNode.firstElementChild;
        target.parentNode.childNodes[1].style.display = 'none';
        target.parentNode.childNodes[2].style.display = 'none';
        inp.blur();
        target.parentNode.children[0].value=old_inpValue;
        saveBtnMark = null;
    }
    */
};
// 输入框按键函数
var keydown_handler = function(event){
    var keyNum = window.event ? event.keyCode : event.which;
    var event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    if (target.className == 'dataInp'){
        if(keyNum == 27){
            target.value = '';
        }
        if (keyNum == 13){
            if (isNaN(target.value)){
                alert('请输入数字！');
            }
            else{
                saveData();
                target.parentNode.childNodes[1].style.display = 'none';
                target.parentNode.childNodes[2].style.display = 'none';
                target.readOnly = true;
                saveBtnMark = 1;
            }
        }
    }
};

// table上鼠标移入更改图表函数
var table_mouseover_handler = function(event){
    var event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    if (target.tagName == "TD"){
        let oRow = target.parentNode;
        let barData = [];
        barData.push(oRow.childNodes[0].innerText);
        barData.push(oRow.childNodes[1].innerText);
        for (let i = 2; i < 14; i++){
            barData.push(oRow.childNodes[i].firstElementChild.value);
        }
        makeBar(barData);
        makeLine(barData, myDraw);
    }
}

// 根据history或者event中的state值来勾选
var makeSelect = function(selectValue){
    if (selectValue){
        for (let item of productCbox){
            item.checked = "";
            if (selectValue.product.indexOf(item.value) !== -1){
                item.checked = 'checked';
            }
        }
        for (let item of regionCbox){
            item.checked = "";
            if (selectValue.region.indexOf(item.value) !== -1){
                item.checked = 'checked';
            }
        }
        selectOne(productCbox);
        selectOne(regionCbox);
    }
}

// 当点击浏览器前进或者后退时触发函数
var stateHandler = function(event){
    var event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    var selectValue = event.state;
    console.log("output_State:");
    console.log(selectValue);
    makeSelect(selectValue);
    inp_change_handler();
};

/*
// 获取hash参数并执行
var wrapHandler = function(){
    if (window.location.hash){
        // 中文会乱码，所以需要decodeURI转码
        var selectValue = decodeURI(window.location.hash.slice(1));
        for (let item of productCbox){
            if (selectValue.indexOf(item.value) !== -1){
                item.checked = 'checked';
            }
        }
        for (let item of regionCbox){
            if (selectValue.indexOf(item.value) !== -1){
                item.checked = 'checked';
            }
        }    
    }
};
*/

// 保存localStorage数据
function saveData(){
    var data_list = [];
    for(let i = 0; i< table.rows.length-1;i++){
        data_list[i] = {};
        if(table.rows[0].cells[0].innerText=='商品' ){
            data_list[i].product = table.rows[i+1].cells[0].innerText;
            data_list[i].region = table.rows[i+1].cells[1].innerText;
            var sale = [];
            for(let j = 2;j<table.rows[i+1].cells.length;j++){
          
                sale.push(table.rows[i+1].cells[j].firstElementChild.value);
            }
            data_list[i].sale = sale;
        }
        else{
            data_list[i].product = table.rows[i+1].cells[1].innerText;
            data_list[i].region = table.rows[i+1].cells[0].innerText;
            var sale = [];
            for(let j = 2;j<table.rows[i+1].cells.length;j++){
                sale.push(table.rows[i+1].cells[j].firstElementChild.value);
            }
            data_list[i].sale = sale;
        }
    }
    //   console.log(data_list);
    //  判断本地是否有数据， 有的话替换修改过的数据，没有的话直接赋值给localStorage
    if(localStorage.getItem('data_list')){
        var old_localStroage = JSON.parse(localStorage.getItem('data_list'));
        for(let item of old_localStroage){
            for(let x of data_list){
                if(item.product == x.product && item.region == x.region){
                    old_localStroage[old_localStroage.indexOf(item)].sale = x.sale;
                }
            }
        }
        for(let x of data_list){
            for(let item of old_localStroage){
                if(! item.product == x.product && item.region == x.region){
                    old_localStroage.push(x);
                }
            }
        }
        localStorage.setItem('data_list',JSON.stringify(old_localStroage));
    }
    else{
        localStorage.setItem('data_list',JSON.stringify(data_list));
    }
}