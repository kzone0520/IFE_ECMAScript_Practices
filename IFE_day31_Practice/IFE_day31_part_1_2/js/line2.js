var makeMoreLine = function (dataList, draw){
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

        // 合并数组获取最大值
        var new_dataList = dataList.join(',').split(',');
        // 过滤非数字元素
        new_dataList = new_dataList.filter(x => !isNaN(x));
        // 数据中的最大值
        var MaxNum =Math.max.apply(null, new_dataList);
        // 按数据中的最大值来进行缩放
        var n = Math.ceil(MaxNum/300);
        
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
        ctx.stroke();
        
        // X轴 刻度
        var k = 1;
        while(k < 13){
            ctx.beginPath();
            ctx.moveTo(k*40, 5);
            ctx.lineTo(k*40, -5);
            ctx.fillText(k+'月', k*40, 20);
            ctx.stroke();
            k += 1;
        }
        // Y轴 刻度
        ctx.moveTo(-5, -MaxNum/n);
        ctx.lineTo(5, -MaxNum/n);
        ctx.fillText(MaxNum, -20, -MaxNum/n+5);
        ctx.stroke();
        //  绘制多条折线
        
        for(let j in dataList){
            j = parseInt(j);
            // 随机颜色
            var color1 = Math.floor(Math.random()*255);
            var color2 = Math.floor(Math.random()*255);
            var color3 = Math.floor(Math.random()*255);
            ctx.fillStyle = "rgb("+color1+","+color2+","+color3+")";
            ctx.strokeStyle = "rgb("+color1+","+color2+","+color3+")";
            
            // 将数组中数据部分取出
            var dataArr = dataList[j].slice(2);
            for(let i in dataArr){
                i = parseInt(i);
                // 数据点实心圆
                ctx.beginPath();
                ctx.moveTo( (i+1)*40+5, -dataArr[i]/n);
                ctx.arc((i+1)*40, -dataArr[i]/n, 5, 0, 2*Math.PI, false);
                
                // 绘制这个数据点和下一个数据点的连线
                ctx.moveTo(i*40+40, -dataArr[i]/n);
                if(i<11){
                    ctx.lineTo((i+1)*40+40, -dataArr[i+1]/n)
                }
                ctx.fill();
                ctx.stroke();
            }
            // 项目颜色说明
            if(j>=5){
                ctx.fillText('  '+dataList[j][0]+'-'+dataList[j][1]+'——', 110*(j-5)+80, -270);
            }
            else{
                ctx.fillText('  '+dataList[j][0]+'-'+dataList[j][1]+'——', 105*j+80, -290);
            }
        }
        // 将原点坐标恢复到左上角（0, 0）
        ctx.translate(-40,-310);
    }
};

