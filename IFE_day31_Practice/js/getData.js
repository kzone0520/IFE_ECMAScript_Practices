

// 获取数据函数
var getData = function ( productValue, regionValue){
    let td_list = [];
    // 循环原始数据以做判断
    for(let item of sourceData){
        // 循环条件一  （维度一）
        for(let i = 0; i < productValue.length; i++){
            // 循环条件二  （维度二）
            for(let j = 0; j < regionValue.length; j++){
                // 判断条件一二，获取数据（以数组形式传递）
                if(item.product === productValue[i] && item.region === regionValue[j] 
                    || item.product === regionValue[j] && item.region === productValue[i]){  // 如果此函数的参数传反了也能输出结果
                    let x_list = [];
                    // 判断商品在前还是地区在前
                    if(productValue.length > 1 && regionValue.length == 1){
                        x_list.push(item.region);
                        x_list.push(item.product);
                    }
                    else{
                        x_list.push(item.product);
                        x_list.push(item.region);
                    }
                    for(let saleValue of item.sale){
                        x_list.push(saleValue);
                    }
                    td_list.push(x_list);
                }
            }
        }
            
    }
    return td_list;
}

