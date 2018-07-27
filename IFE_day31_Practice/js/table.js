// 生成表格函数
var tbodyHTML = function (productValue, regionValue){
    // 制作表头
    // 当地区选择了一个，商品选择了多个的时候，地区作为第一列，商品作为第二列
    if(productValue.length > 1 && regionValue.length == 1){
        var dataHTML = "<tr id='row1'><th>地区</th><th>商品</th>";
    }
    // 其他情况商品作为第一列，地区作为第二列。
    else{
        var dataHTML = "<tr id='row1'><th>商品</th><th>地区</th>";
    }
    for(let i = 1; i < 13; i++){
        dataHTML += '<th>' + i + '月' + '</th>';
    }
    dataHTML += "</tr>";
    // 制作表格内容
    let list = getData( productValue, regionValue);
    for(let j = 0; j < list.length; j++){
        dataHTML += '<tr class = "trData">';
        for(let t_data of list[j]){
            dataHTML += '<td>' + t_data + '</td>';
        }
        dataHTML += '</tr>';
    }
    return dataHTML;
}
