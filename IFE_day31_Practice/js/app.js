var regionSelect = document.getElementById('region-select');
var regionCbox = regionSelect.querySelectorAll('input');
var productSelect = document.getElementById('product-select');
var productCbox = productSelect.querySelectorAll('input');
var tbody = document.querySelector('tbody');
var selectDiv = document.getElementById('selectDiv');

// 绑定点击(勾选)事件
regionCbox[3].onclick = function(){
    selectAll(regionCbox);
}
productCbox[3].onclick = function(){
    selectAll(productCbox);
}
for(let i = 0; i < regionCbox.length - 1; i++){
    regionCbox[i].onclick = function(){
        selectOne(regionCbox);
    }
}
for(let j = 0; j < productCbox.length - 1; j++){
    productCbox[j].onclick = function(){
        selectOne(productCbox);
    }
}
// 监听点击（勾选）事件，显示表格
selectDiv.addEventListener('click', function(){    
    // 获取勾选的值
    var productValueList = [];
    var regionValueList = [];
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
    // 显示表格
    tbody.innerHTML = "";
    tbody.innerHTML += tbodyHTML(productValueList, regionValueList);
    // 合并表格
    var trData = document.querySelectorAll('.trData');
    for(let item of trData){
        // 判断合并的标签
        if(item.childElementCount == 14){
            // 判断合并行数，设置rowspan属性
            if(productValueList.length > 1 && regionValueList.length == 1){
                item.firstChild.setAttribute('rowspan', productValueList.length);
            }
            else{
                item.firstChild.setAttribute('rowspan', regionValueList.length);
            }
        }
    }
});

// 初始显示表格,初始状态一行只有一个勾选，所以不可取消
regionCbox[0].checked = "checked";
regionCbox[0].disabled= true;
productCbox[0].checked = "checked";
productCbox[0].disabled = true;
tbody.innerHTML = tbodyHTML([sourceData[0].product], [sourceData[0].region]);