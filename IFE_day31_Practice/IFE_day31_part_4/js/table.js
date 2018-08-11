// 生成表格函数
var tbodyHTML = function (productValue, regionValue){
    table.innerHTML = "";
    var list = getData( productValue, regionValue);
    // 制作表头
    var headTr = document.createElement('tr');
    headTr.innerHTML += "<th>商品</th><th>地区</th>";
    for(let i = 1; i < 13; i++){
        headTr.innerHTML += '<th>' + i + '月' + '</th>';
    }
    table.appendChild(headTr);
    // 制作表格内容
    for(let j = 0; j < list.length; j++){
        var dataTr = document.createElement('tr');
        dataTr.setAttribute('class', 'trData');
        
        var dataTd1 = document.createElement('td');

        dataTd1.innerText = list[j][0];
        dataTr.appendChild(dataTd1);

        var dataTd2 = document.createElement('td');
        dataTd2.innerText = list[j][1];
        dataTr.appendChild(dataTd2);

        for(let i = 2; i< list[j].length; i++){
            var dataTd = document.createElement('td');
            dataTd.setAttribute('class', 'dataTd');
            
            var inp = document.createElement('input');
            inp.setAttribute('class', 'dataInp');
            inp.setAttribute('type', 'text');
            inp.setAttribute('value', list[j][i] );
            dataTd.appendChild(inp);

            var saveBtn = document.createElement('input');
            saveBtn.setAttribute('class', 'save');
            saveBtn.setAttribute('type', 'button');
            saveBtn.value = '保存';
            dataTd.appendChild(saveBtn);

            var cancleBtn = document.createElement('input');
            cancleBtn.setAttribute('class', 'cancle');
            cancleBtn.setAttribute('type', 'button');
            cancleBtn.value = '取消';
            dataTd.appendChild(cancleBtn);

            var img = document.createElement('img');
            img.setAttribute('class', 'img');
            img.setAttribute('width', '10px');
            img.setAttribute('height', '10px');
            img.setAttribute('src', './pen.png');
            img.setAttribute('alt', 'pen');
            dataTd.appendChild(img);

            dataTr.appendChild(dataTd);
        }
        table.appendChild(dataTr);
    }
    /* 这种表格制作方法代码更少  但是表格变动没法触发事件
    // 制作表头
    var dataHTML = "<tr id='row1' ><th><input type='text' style='font-weight:bold;' value='商品'></th><th><input type='text'style='font-weight:bold;' value='地区'></th>";
    for(let i = 1; i < 13; i++){
        dataHTML += '<th>' + i + '月' + '</th>';
    }
    dataHTML += "</tr>";
    // 制作表格内容
    let list = getData( productValue, regionValue);
    for(let j = 0; j < list.length; j++){
        dataHTML += '<tr class="trData" >';
        for(let t_data of list[j]){
            dataHTML += '<td class="tdd" ><input  class="dataInp" readonly="true" type="text" value=' + t_data + ' ></td>';
        }
        dataHTML += '</tr>';
    }
    return dataHTML;
    */
};