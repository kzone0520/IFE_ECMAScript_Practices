 
var dataBar = document.getElementById('dataBar');

var makeBar = function(dataList){
    // 将数组中数据部分取出
    var new_dataList = dataList.slice(2);
    // 数据中的最大值
    var MaxNum =Math.max.apply(null, new_dataList);
    // 按数据中的最大值来进行缩放
    if(MaxNum > 500){
        var shrink_dataList = new_dataList.map(function (x){return x/2.5});
    }
    if(MaxNum > 300 && MaxNum <= 500){
        var shrink_dataList = new_dataList.map(function (x){return x/2});
    }
    if(MaxNum > 200 && MaxNum <= 300){
        var shrink_dataList = new_dataList;
    }
    if(MaxNum > 100 && MaxNum <= 200){
        var shrink_dataList = new_dataList.map(function (x){return x/0.7});
    }
    if(MaxNum >= 30 && MaxNum <= 100){
        var shrink_dataList = new_dataList.map(function (x){return x/0.4});
    }
    
    // 格式化柱子
    dataBar.innerHTML = '';
    for(let i in shrink_dataList){
        i = parseInt(i);
        // 绘制柱子及一些文本信息
        dataBar.innerHTML += "<rect x="+(40+(i+1)*40-20)+" y=" + (310 - shrink_dataList[i]) +" width='20' height="+shrink_dataList[i] +">";
        dataBar.innerHTML += "<text x="+(40+(i+1)*40-20)+" y=" + (310 - shrink_dataList[i]-10) + " fill='black' >"+ new_dataList[i]+"</text>";
        dataBar.innerHTML += "<text x="+(40+(i+1)*40-20)+" y='330' fill='black' >"+ (i+1)+"月" +"</text>";
    }
    // 一些文本信息
    dataBar.innerHTML += "<text x='50' y='25' fill='black' >销量</text>";
    dataBar.innerHTML += "<text x='545' y='315' fill='black' >月份</text>";
    dataBar.innerHTML += "<text x='200' y='355' fill='black' >"+ dataList[0]+"--"+dataList[1]+"    月份销售量柱状图 "+"</text>";
};