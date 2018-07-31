var makeLine = function (dataList, draw){
    if(draw.getContext){
        var ctx = draw.getContext('2d');
        // 清空画布
        ctx.clearRect(0,0,800,800);

        ctx.fillStyle = 'black';
        ctx.strokeStyle = 'black';
        // 初始化文字设置
        ctx.font = "bold 12px Arial";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';

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
        
        // 缩小后数组中的最大值
        var newMaxNum =Math.max.apply(null, shrink_dataList);
        
        // 坐标设置为原点
        ctx.translate(40,310);
        // 绘画Y轴
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(0,-300);
        // Y轴箭头
        ctx.moveTo(-5, -295);
        ctx.lineTo(0, -300);
        ctx.lineTo(5,-295)
        ctx.fillText('销量', 20, -280);
        
        // 绘画X轴
        ctx.moveTo(0,0);
        ctx.lineTo(520,0);
        // X轴箭头
        ctx.moveTo(515, -5);
        ctx.lineTo(520, 0);
        ctx.lineTo(515, 5);
        ctx.fillText('月份', 535, 7);
        
        for( let i in shrink_dataList){
            i = parseInt(i);
            // 数据点实心圆
            ctx.fillStyle = 'blue';
            ctx.moveTo( (i+1)*40+5, -shrink_dataList[i]);
            ctx.arc((i+1)*40, -shrink_dataList[i], 5, 0, 2*Math.PI, false);
            ctx.fill();
            // 圆上数字
            ctx.fillStyle = 'black';
            ctx.fillText(new_dataList[i], i*40+40, -shrink_dataList[i]-5);
            ctx.stroke();
            
            // 绘制这个数据点和下一个数据点的连线
            ctx.moveTo(i*40+40, -shrink_dataList[i]);
            if(i<11){
                ctx.lineTo((i+1)*40+40, -shrink_dataList[i+1])
            }
            // X轴 刻度
            ctx.moveTo((i+1)*40, 5);
            ctx.lineTo((i+1)*40, -5);
            ctx.fillText((i+1)+'月', i*40+40, 20);
        }
        // 折线图名称
        ctx.fillText(dataList[0]+'--'+dataList[1]+'    月份销售量折线图', 260, 40);
        // 将原点坐标恢复到左上角（0, 0）
        ctx.translate(-40,-310);
    }
};

